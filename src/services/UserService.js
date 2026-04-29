import UserModel from "../models/UserModel.js";
import { hash } from "bcrypt";

class UserService {
  async findAll() {
    return await UserModel.findAll();
  }

  async findById(id) {
    return await UserModel.findById(id);
  }

  async create(dto) {
    const existingUser = await UserModel.findByEmail(dto.email);

    if (existingUser) {
      throw new Error("User already registered");
    }

    const passwordHash = await hash(dto.password, 8);

    const newUser = new UserModel(dto.name, passwordHash, dto.email);

    const userData = await UserModel.create(newUser);

    const { password, ...userWithoutPassword } = userData;

    return userWithoutPassword;
  }

  async update(id, dto) {
    const user = await this.findById(id);

    if (!user) return null;

    const updateData = { ...dto };

    if (dto.password) {
      updateData.password = await hash(dto.password, 8);
    }

    const userData = await UserModel.update(id, updateData);

    const { password, ...userWithoutPassword } = userData;

    return userWithoutPassword;
  }

  async delete(id) {
    const userData = await UserModel.delete(id);

    return userData;
  }
}

export default UserService;
