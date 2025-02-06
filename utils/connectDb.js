import mongoose from "mongoose"
import { MONGO_URI } from "./config.js"

console.log("connecting to", MONGO_URI)

const connect = () => {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("connected to", MONGO_URI, "sucessfully")
    })
    .catch((err) => {
      console.log(err.message, "failed to connect")
    })
}

export default connect
