import { v4 as uuidv4 } from "uuid";
import path from "path";
import { readFile, writeFile } from "fs/promises";
import { fileURLToPath } from "url";

import { ROLES } from "../constants/roles.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const usersPath = path.resolve(__dirname, "../db/users.json");

class UserModel {
  constructor(name, password, email) {
    this.id = uuidv4();
    this.name = name;
    this.password = password;
    this.email = email;
    this.role = ROLES.CUSTOMER;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  static async findAll() {
    const data = await readFile(usersPath, "utf-8");
    return JSON.parse(data);
  }

  static async findByEmail(email) {
    const data = await this.findAll();
    return data.find((user) => user.email === email);
  }

  static async findById(id) {
    const data = await this.findAll();
    return data.find((user) => user.id === id);
  }

  static async create(userData) {
    const data = await this.findAll();
    data.push(userData);
    await writeFile(usersPath, JSON.stringify(data, null, 2));
    return userData;
  }

  static async update(id, userData) {
    const data = await this.findAll();
    const dataIndex = data.findIndex((user) => user.id === id);

    if (dataIndex === -1) return null;

    const updatedUser = {
      ...data[dataIndex],
      ...userData,
      id,
      updatedAt: new Date(),
    };

    data[dataIndex] = updatedUser;

    await writeFile(usersPath, JSON.stringify(data, null, 2));
    return updatedUser;
  }

  static async delete(id) {
    const data = await this.findAll();
    const dataIndex = data.findIndex((user) => user.id === id);

    if (dataIndex === -1) return null;

    data.splice(dataIndex, 1);

    await writeFile(usersPath, JSON.stringify(data, null, 2));
    return true;
  }
}

export default UserModel;
