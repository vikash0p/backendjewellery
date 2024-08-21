import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import mongodbConnection from './utils/mongodbConnection.js';
import jewelleryRoute from './mvc/routes/jewelleryRoute.js';
mongodbConnection();
dotenv.config();
const app = express();
const port=process.env.PORT||5500;
app.use(cors())
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use("/", jewelleryRoute);

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`pizza app listening on port ${port}`)
})