import { test, after } from "node:test"
import mongoose from "mongoose"
import assert from "assert"
import supertest from "supertest"
import app from "../app.js"

const api = supertest(app)

test("blog returns correct amount of blog posts", async () => {
  const response = await api
    .get("/api/blogs")
    .expect(200)
    .expect("Content-Type", /application\/json/)

  assert.strictEqual(response.body.length, 6)
})

test("unique identifier property of the blog posts is named id", async () => {
  const blogs = await api.get("/api/blogs")
  const blog = blogs.body[0]
  assert.ok(blog.id, "id field is missing")
  assert.equal(blog._id, undefined, "_id field should not exist")
})
after(async () => {
  await mongoose.connection.close()
})
