import { initMongodb } from "@/lib/mongoose";
import Product from "@/models/Product";

export default async function handle(req, res) {
  await initMongodb();
  res.json(await Product.find().exec());
}
