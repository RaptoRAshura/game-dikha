'user strict';
var sql = require('../server/db_mysql.js');


var Batsman = function(batsman){
    this.Name = batsman.Name
    this.Runs = batsman.Runs
    this.Matches = batsman.Matches
    this.Ranking = batsman.Ranking
    this.Points = batsman.Points
    this.Team = batsman.Team
    this.City =batsman.City   
};


Batsman.getAllBatsman = function (result) {
        sql.query("SELECT CONCAT(R.FirstName, ' ', R.LastName) As Name, B.Runs, B.Matches,B.Ranking, B.Points,R.Team From batsman_score_tbl As B Inner Join registration_data_tbl AS R on (B.ID = R.ID) ORDER BY Ranking;", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Batsman : ', res);  

                 result(null, res);
                }
            });   
};


module.exports= Batsman;