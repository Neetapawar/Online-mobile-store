import express from 'express'
import path from 'path'
import morgan from 'morgan'
import dotenv from 'dotenv'
import {notFound ,errorHandler} from './middleware/errorModdleware.js'
import connectDB from './config/database.js'
import  productRoutes from './routes/productRoutes.js'
import  userRoutes from './routes/userRoutes.js'
import orderRoute from './routes/orderRoute.js'
import uploadRoutes from './routes/uploadRoutes.js'
dotenv.config()


connectDB()
const app=express()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }
  

app.use(express.json())



app.get('/',(req,res)=>{
    res.send('ApI is running.....')
})

app.use('/api/products', productRoutes)
app.use('/api/users',userRoutes)
app.use('/api/orders',orderRoute)
app.use('/api/upload',uploadRoutes)
app.get('/api/config/paypal',(req,res)=>res.send(process.env.PAYPAL_CLIENT_ID))

const __dirname=path.resolve()
app.use('/uploads',express.static(path.join(__dirname,'/uploads')))


app.use(notFound)

app.use(errorHandler)


const PORT=process.env.PORT ||5000
app.listen(PORT)
console.log('Server running on port 5000')