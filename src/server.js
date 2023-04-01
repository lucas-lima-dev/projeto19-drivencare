import "express-async-errors"
import express, {json} from "express"
import cors from "cors"
import routes from "./routes/index.routes.js"
import { handleApplicationErrors } from "./middlewares/error.middleware.js"

const app = express()
app.use([json(),cors(),routes,handleApplicationErrors])

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))