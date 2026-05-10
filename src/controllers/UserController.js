import UserService from "../services/UserService.js";

const userService = new UserService();

class UserController {
  static async getUsers(_, res) {
    try {
      const users = await userService.findAll();

      res.status(200).json({
        success: true,
        total: users.length,
        data: users,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async getUserById(req, res) {
    const { id } = req.params;

    try {
      const user = await userService.findById(id);

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found!",
        });
      }

      res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async postUser(req, res) {
    const { name, password, email } = req.body;

    try {
      const user = await userService.create({ name, password, email });

      res.status(201).json({
        success: true,
        message: "User created successfully",
        data: user,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async patchUser(req, res) {
    const { id } = req.params;

    const loggedUser = req.user;

    try {
      const user = await userService.update(id, req.body, loggedUser);

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found!",
        });
      }

      res.status(200).json({
        success: true,
        message: "User updated successfully!",
        data: user,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params;

    try {
      const deleted = await userService.delete(id);

      if (deleted === null) {
        return res.status(404).json({
          success: false,
          message: "User not found!",
        });
      }

      res.status(204).send();
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal server error while fetching users!",
      });
    }
  }
}

export default UserController;
