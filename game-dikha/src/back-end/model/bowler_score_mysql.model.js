'user strict';
var sql = require('../server/db_mysql.js');


var Bowler = function(bowler){
    this.Name = bowler.Name
    this.Wickets = bowler.Wickets
    this.Matches = bowler.Matches
    this.Ranking = bowler.Ranking
    this.Points = bowler.Points
    this.Team = bowler.Team
    this.City =bowler.City   
};


Bowler.getAllBowler = function (result) {
        sql.query("SELECT CONCAT(R.FirstName, ' ', R.LastName) As Name, B.Wickets, B.Matches,B.Ranking, B.Points,R.Team From bowler_score_tbl As B Inner Join registration_data_tbl AS R on (B.ID = R.ID) ORDER BY Ranking;", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Bowler : ', res);  

                 result(null, res);
                }
            });   
};


module.exports= Bowler;