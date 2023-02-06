import { model, models, Schema } from "mongoose";

const ProductsSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  picture: String,
});

const Product = models?.Product || model("Product", ProductsSchema);

export default Product;
