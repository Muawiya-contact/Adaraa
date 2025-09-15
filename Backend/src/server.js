import http from "http";
import app from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 5000;

async function start() {
  if (process.env.SKIP_DB === "true") {
    console.warn("Starting without MongoDB (SKIP_DB=true)");
  } else {
    try {
      await connectDB();
    } catch (err) {
      console.error(
        "DB connection failed, continuing without DB:",
        err?.message || err
      );
    }
  }
  const server = http.createServer(app);
  server.listen(PORT, () => {
    console.log(`ADARAA API running on port ${PORT}`);
  });
}

start().catch((err) => {
  console.error("Failed to start server", err);
  process.exit(1);
});
