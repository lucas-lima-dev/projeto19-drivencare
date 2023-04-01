import "express-async-errors"
import express, {json} from "express"
import cors from "cors"
import routes from "./routes/index.routes.js"

const app = express()
app.use([json(),cors(),routes])

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))