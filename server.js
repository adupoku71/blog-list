import app from "./app.js"
import { configDotenv } from "dotenv"
configDotenv()
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log("server running on port", port)
})
