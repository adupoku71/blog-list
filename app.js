import express from "express"
const app = express()
import cors from "cors"
import Blog from "./models/blog.js"
import connect from "./utils/connectDb.js"

connect()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

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
