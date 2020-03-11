const express = require('express'),
app = express(),
bodyParser = require('body-parser');
port = process.env.PORT || 4000;
var cors = require('cors'); 
const playerRoutes = express.Router();
var reg_Task = require('E:/Web_Development/patient-registration-form/src/back-end/model/player_reg_mysql.model.js');
var btmn_score_Task = require('../model/batsman_score_mysql.model.js');
var bowler_score_Task = require('../model/bowler_score_mysql.model.js');

const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Qwerty12@',
    database: 'registration_data',
    multipleStatements: true
});
 
// connect to database
mc.connect();
app.use(cors());
app.listen(port);




console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

playerRoutes.route('/btmn').get(function(req, res) {
  btmn_score_Task.getAllBatsman(function(err, task) {
    if (err)
      res.send(err);
    res.send(task);
  });
});
playerRoutes.route('/bowler').get(function(req, res) {
  bowler_score_Task.getAllBowler(function(err, task) {
    if (err)
      res.send(err);
    res.send(task);
  });
 
});

playerRoutes.route('/add').post(function(req, res) {
  var new_reg_task = new reg_Task(req.body);
  
  
  reg_Task.registerPlayer(new_reg_task, function(err, task) {
    
    if (err)
      res.send(err);
    res.json(task);
  });
}
);

app.use('/registration_data', playerRoutes);









