import mongoose, { Schema } from "mongoose"

const blogSchema = new Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
})

const Blog = mongoose.model("Blog", blogSchema)

blogSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})
export default Blog
