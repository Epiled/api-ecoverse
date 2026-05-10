import { ROLES } from "../constants/roles";

const { ADMIN } = ROLES;

const isOwnerOrAdmin = () => {
  return async (req, res, next) => {
    const { id } = req.params;
    const loggedUser = req.user;

    if (!loggedUser) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const isAdmin = loggedUser.role === ADMIN;
    const isOwner = loggedUser.id === id;

    if (isAdmin || isOwner) {
      return next();
    }

    return res.status(403).json({
      success: false,
      message:
        "Access denied: You can only manage your own data or must be an Admin.",
    });
  };
};

export default isOwnerOrAdmin;
