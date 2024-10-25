import dotenv from 'dotenv';
dotenv.config()
import express from 'express'
import web from "./routes/web.js";
const  app =express()
const port = process.env.PORT || '3000'

// JSON
app.use(express.json())

//Load Routes
app.use("/fedex",web)
app.listen(port,()=>){
    console.log('Server listening at http://localhost:${port}')
}