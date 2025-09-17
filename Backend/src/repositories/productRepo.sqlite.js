import { db } from "../config/sqlite.js";
import { randomUUID } from "crypto";

export const productRepo = {
  list() {
    return db.prepare("SELECT * FROM products ORDER BY createdAt DESC LIMIT 100").all();
  },
  create({ title, slug, description, price, stock = 0 }) {
    const id = randomUUID();
    const createdAt = new Date().toISOString();
    db.prepare(`INSERT INTO products (id,title,slug,description,price,stock,createdAt)
      VALUES (@id,@title,@slug,@description,@price,@stock,@createdAt)`)
      .run({ id, title, slug, description, price, stock, createdAt });
    return { id, title, slug, description, price, stock, createdAt };
  },
};