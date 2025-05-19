import express from "express"
import router from "./routes/userRoutes"

const app = express()
const port = 5001

app.use(express.json())
app.use("/api", router)

app.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}`)
})

