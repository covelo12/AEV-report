const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const env = require('dotenv')
const mongoose = require('mongoose')
const user = require('./routes/user')
const place = require('./routes/place')
const booking = require('./routes/booking')

const app = express()
env.config();

app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: ['http://localhost:3000'], 
    methods: ['GET', 'PUT', 'POST','DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token'], 
    credentials: true
}))
mongoose.connect("mongodb+srv://admin:admin@cluster0.6rvzzfl.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DataBase Connected")
})
app.get('/', (req,res)=>{
    return res.json({message:"App is Running"})
})
app.use('/api/v1/user',user)
app.use('/api/v1/place',place)
app.use('/api/v1/booking',booking)


app.listen(4000, ()=>{
    console.log('Server is Running on Port 4000')
})
