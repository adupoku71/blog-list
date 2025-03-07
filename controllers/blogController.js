import { Router } from "express"
import Blog from "../models/blog.js"
const blogRouter = Router()

blogRouter.get("/", async (req, res) => {
  const blogs = await Blog.find({})
  res.status(200).json(blogs)
})

blogRouter.post("/", async (req, res) => {
  const blog = new Blog(req.body)
  const addedBlog = await blog.save()
  res.status(201).json(addedBlog)
})

blogRouter.delete("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const deletedNote = await Blog.findByIdAndDelete(id)
    res.status(200).json(deletedNote)
  } catch (error) {
    console.log(error.message)
    res.status(400).json({ msg: "invalid id" })
  }
})
export default blogRouter
