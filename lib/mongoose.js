import mongoose from "mongoose";

export async function initMongodb() {
  const uri = "mongodb+srv://zakydfls:kajen123@cluster0.yxkfzhg.mongodb.net/nextjs-ecommerce?retryWrites=true&w=majority";

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  }

  mongoose.set("strictQuery", false);
  return await mongoose.connect(uri);
}
