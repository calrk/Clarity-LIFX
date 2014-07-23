var lifx = require('lifx').init();
var express = require('express');
var app = module.exports = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var whiteColor = 0x0dac;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/'))
app.listen(80);


app.post('/lights', function (req, res, next){
  var hsv = req.body.hsv;
  console.log('changing colour: ' + hsv);

  if(lifx.bulbs.length > 0){
    lifx.lightsColour(Math.round(hsv[0]/360*0xffff), Math.round(hsv[1]*0xffff), Math.round(hsv[2]*0xffff), whiteColor, 0x0000);
  }
  res.send(200);
});

console.log('listening');