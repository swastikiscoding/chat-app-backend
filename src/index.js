import express from 'express';
import authRoutes from './routes/auth.route.js';
import dotenv from 'dotenv';
import { connectDB } from './lib/db.js';
dotenv.config()
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/api/auth', authRoutes);

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
    connectDB()
})