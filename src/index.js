import express from 'express';
import authRoutes from './routes/auth.route.js';
import dotenv from 'dotenv';
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';
import messageRoutes from './routes/message.route.js';
import cors from 'cors';
import { app, server, io } from './lib/socket.js';

dotenv.config()
const PORT = process.env.PORT;



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())
app.use(cors({
    origin: ['http://localhost:5173', 'https://dwnk4mq4-5173.inc1.devtunnels.ms'],
    credentials: true
}))


app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

server.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
    connectDB()
})