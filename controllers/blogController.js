import { Router } from "express"
import Blog from "../models/blog"
const blogRouter = Router()

blogRouter.get("/", (req, res) => {
  Blog.find({}).then((blogs) => {
    res.status(200).json(blogs)
  })
})

blogRouter.post("/", (req, res) => {
  const blog = new Blog(req.body)

  blog.save().then((result) => {
    res.status(201).json(result)
  })
})

export default blogRouter
