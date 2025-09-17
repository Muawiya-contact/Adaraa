// middleware/admin.js
export function admin(req, res, next) {
    if (req.user?.role !== "admin") return res.status(403).json({ error: { message: "Forbidden" }});
    next();
  }