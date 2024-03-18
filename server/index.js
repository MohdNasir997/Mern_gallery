import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { ConnectDB } from './ConnectDb.js';
import cookieParser from 'cookie-parser';
import AuthRoutes from './routes/auth.js'
import ImagesRoutes from './routes/images.js'
dotenv.config();


const app = express()
const PORT = process.env.PORT || 3000;
ConnectDB()
app.use(cors({origin:process.env.ClientURI,credentials:true,}))
app.use(express.json())
app.use(cookieParser())

// Routes
app.use('/api/images',ImagesRoutes)
app.use('/api/auth/',AuthRoutes)

// Listening to PORT
app.listen(PORT,() => {
    console.log('Listening to port ',PORT)
})