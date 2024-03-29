const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    subtitle: { type: String },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array },
    pages: { type: Number },
    rating: { type: Number },
    price: { type: Number, required: true },
    audio: { type: String },
    video: { type: String },
    pdfPath: {type: Object},
    imgcontent: {type: Array},
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
