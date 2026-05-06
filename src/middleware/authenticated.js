import jwt from "jsonwebtoken";
import { secret } from "../../config/jsonSecret.js";

export default async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token || !token.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Access token not provided or invalid",
    });
  }

  const [, accessToken] = token.split(" ");

  try {
    const { id, email } = jwt.verify(accessToken, secret);

    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Unauthorized user",
    });
  }
};
