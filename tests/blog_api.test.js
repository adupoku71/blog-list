import { test, after, beforeEach } from "node:test"
import mongoose from "mongoose"
import assert from "assert"
import supertest from "supertest"
import app from "../app.js"
import Blog from "../models/blog.js"

const api = supertest(app)

const newBlogs = [
  {
    title: "Understanding JavaScript Closures",
    author: "John Doe",
    url: "https://example.com/js-closures",
    likes: 42,
  },
  {
    title: "A Guide to Responsive Web Design",
    author: "Jane Smith",
    url: "https://example.com/responsive-design",
    likes: 30,
  },
]

beforeEach(async () => {
  await Blog.deleteMany({})
  await Blog.insertMany(newBlogs)
})
test("blog returns correct amount of blog posts", async () => {
  const response = await api
    .get("/api/blogs")
    .expect(200)
    .expect("Content-Type", /application\/json/)

  assert.strictEqual(response.body.length, 2)
})

test("unique identifier property of the blog posts is named id", async () => {
  const blogs = await api.get("/api/blogs")
  const blog = blogs.body[0]
  assert.ok(blog.id, "id field is missing")
  assert.equal(blog._id, undefined, "_id field should not exist")
})

test("verify adding a new blog", async () => {
  const newBlog = {
    title: "Testing Add Blog",
    author: "David Adu Poku",
    url: "https://example.com/responsive-design",
    likes: 30,
  }

  const addedBlog = await api.post("/api/blogs").send(newBlog).expect(201)

  const response = await api.get("/api/blogs")
  assert(response.body.map((blog) => blog.title).includes("Testing Add Blog"))
})

test("verify deleted post", async () => {
  let blogs = await api.get("/api/blogs")
  const { id } = blogs.body[0]
  await api.delete(`/api/blogs/${id}`)
  blogs = await api.get("/api/blogs")
  assert(blogs.body.length === newBlogs.length - 1)
})

after(async () => {
  await mongoose.connection.close()
})
