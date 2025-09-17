// middleware/auth.js
import jwt from "jsonwebtoken";
export function auth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: { message: "Unauthorized" }});
  try {
    req.user = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    next();
  } catch {
    return res.status(401).json({ error: { message: "Invalid token" }});
  }
}