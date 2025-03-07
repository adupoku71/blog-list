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

export default blogRouter
