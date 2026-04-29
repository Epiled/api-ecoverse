import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { secret } from "../../config/jsonSecret.js";

class AuthService {
  async login(dto) {
    const user = await UserModel.findByEmail(dto.email);

    if (!user) throw new Error("User not register!");

    const { name, password, email } = user;
    const userFiltered = { name, password, email };

    const equalsPassword = await bcrypt.compare(
      dto.password,
      userFiltered.password,
    );

    if (!equalsPassword) {
      throw new Error("User or password invalid!");
    }

    const accessToken = jwt.sign(
      {
        id: userFiltered.id,
        email: userFiltered.email,
      },
      secret,
      {
        expiresIn: 86400,
      },
    );

    return { accessToken };
  }
}

export default AuthService;
