var express=require('express');
const  query= require('./utils/database');
const router=express.Router();
var cors=require("cors");
const app = express()
const fs=require('fs');
const { query } = require('../utils/database');



router.get('/api/plants', (req, res) => {
  query(`SELECT * FROM plants`, [], (error, results) => {
    if (error) return res.status(500).json({ errno: error.errno, msg: 'Hiba' });
    res.status(200).json(results);
  }, req);
})

module.exports = router;