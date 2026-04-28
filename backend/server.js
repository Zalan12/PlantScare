var express=require('express');
const  query= require('./utils/database');
const router=express.Router();
var cors=require("cors");
const app = express()
const fs=require('fs')


app.use(cors());
app.use(express.json());  // json formátum megkövetelése
app.use(express.urlencoded({ extended: true })); 


app.get('/', (req, res) => {
  res.send('Hello World')
})





app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})