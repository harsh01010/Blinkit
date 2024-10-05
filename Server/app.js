import Fastify from "fastify";
import { connectDB } from "./src/config/connect.js";
import "dotenv/config";

const start = async () => {
  await connectDB(process.env.MONGO_URI);
  const app = Fastify();

  const PORT = process.env.PORT || 3000;
  app.listen({ port: PORT, host: "0.0.0.0" }, (err, addr) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Blinkit Started on http://localhost:" + PORT);
    }
  });
};
start();
