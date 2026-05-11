const authorize = (rolesList) => {
  return async (req, res, next) => {
    const user = req.user;

    if (!user || !user.role) {
      return res.status(401).json({
        success: false,
        message: "User information not found. Authentication required.",
      });
    }

    try {
      const hasRole = rolesList.some(
        (role) => role.toLowerCase() === user.role.toLowerCase(),
      );

      if (!hasRole) {
        return res.status(403).json({
          success: false,
          message: "Access denied: unauthorized role",
        });
      }

      return next();
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal server error during authorization",
      });
    }
  };
};

export default authorize;
