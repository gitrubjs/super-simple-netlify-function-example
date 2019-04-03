const express = require('express');
const fileUpload = require('express-fileupload');
const serverless = require("serverless-http");
const app = express();

const uploader = express.Router();

uploader
.route('/')
.post((req,res) => {
  res.json({file:req.files})
})

app.use('/.netlify/functions/upload',fileUpload(), uploader);

exports.handler = serverless(app);