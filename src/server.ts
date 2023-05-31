import mongoose from "mongoose";
import config from "./config/index";
import app from "./app";
const port: Number = 3000;

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("database connected");

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log("Failed to connect the database", error);
  }
}

bootstrap();
