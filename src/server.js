import "express-async-errors"
import express, {json} from "express"
import cors from "cors"

const app = express()
app.use([json(),cors()])

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))