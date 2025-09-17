import Database from "better-sqlite3";
import fs from "fs";
import path from "path";

const dbFile = path.join(process.cwd(), "data", "db.sqlite");
fs.mkdirSync(path.dirname(dbFile), { recursive: true });

export const db = new Database(dbFile);

// Migrations (run once)
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    passwordHash TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'user',
    createdAt TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE,
    description TEXT,
    price REAL NOT NULL,
    stock INTEGER NOT NULL DEFAULT 0,
    createdAt TEXT NOT NULL
  );
`);