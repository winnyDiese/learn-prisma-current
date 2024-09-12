import express from "express"
import {getPosts} from "./controllers/post"

const app = express()

app.get('/api/posts', getPosts)

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
