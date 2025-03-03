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

after(async () => {
  await mongoose.connection.close()
})
