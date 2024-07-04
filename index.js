import dotenv from "dotenv"
import express from "express"
import http from "http"
dotenv.config()
const port = process.env.PORT || 3006

const app = express()
app.use("/", express.static("public"))
const server = http.createServer(app)
server.listen(port, ()=>{
    console.log("server running")
})