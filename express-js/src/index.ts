import express from "express"
import router from "./routes/userRoutes"
import { logger } from "./middleware/logger"
import { notFound } from "./middleware/notFound"
import { errorHandler } from "./middleware/errorHandler"
import { initUsers } from "./data/users"
import dotenv from "dotenv"

const app = express()
const port = 5001

dotenv.config()
initUsers()

app.use(logger)
app.use(express.json())
app.use("/api", router)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}`)
})

