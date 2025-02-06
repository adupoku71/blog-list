import express from "express"
const app = express()
import cors from "cors"
import connect from "./utils/connectDb.js"
import blogRouter from "./controllers/blogController.js"

//db connection
connect()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//handles blog request logic
app.use("/api/blogs", blogRouter)

export default app
