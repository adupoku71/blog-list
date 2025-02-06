import express from "express"
const app = express()
import cors from "cors"
import mongoose from "mongoose"

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
})

const Blog = mongoose.model("Blog", blogSchema)

const mongoUrl = "mongodb://localhost:27017/bloglist"
mongoose.connect(mongoUrl)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.get("/", (req, res) => {
  res.send("hello")
})

app.get("/api/blogs", (req, res) => {
  Blog.find({}).then((blogs) => {
    res.status(200).json(blogs)
  })
})

app.post("/api/blogs", (req, res) => {
  const blog = new Blog(req.body)

  blog.save().then((result) => {
    res.status(201).json(result)
  })
})

export default app
