const express = require('express');
const fileUpload = require('express-fileupload');
const serverless = require("serverless-http");
const app = express();

const uploader = express.Router();

uploader.route('/').get((req,res) => {
  res.json({ok:true});
})

app.use('/.netlify/functions/upload',fileUpload(), uploader);

exports.handler = serverless(app);