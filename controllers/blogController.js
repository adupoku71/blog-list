import { Router } from "express"
import Blog from "../models/blog.js"
const blogRouter = Router()

blogRouter.get("/", async (req, res) => {
  const blogs = await Blog.find({})
  res.status(200).json(blogs)
})

blogRouter.post("/", (req, res) => {
  const blog = new Blog(req.body)

  blog.save().then((result) => {
    res.status(201).json(result)
  })
})

export default blogRouter
