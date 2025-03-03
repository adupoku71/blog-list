import mongoose from "mongoose"
import { MONGO_URI } from "./config.js"

console.log("connecting to database")

const connect = () => {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("connected sucessfully")
    })
    .catch((err) => {
      console.log(err.message, "failed to connect")
    })
}

export default connect
