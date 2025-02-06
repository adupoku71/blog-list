import mongoose, { Schema } from "mongoose"

const blogSchema = new Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
})

const Blog = mongoose.model("Blog", blogSchema)

export default Blog
