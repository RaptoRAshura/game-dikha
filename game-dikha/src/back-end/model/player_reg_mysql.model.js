'user strict';
var sql = require('../server/db_mysql.js');

var Registration = function(player){
    this.FirstName  = player.FirstName 
    this.LastName = player.LastName    
    this.Email = player.Email
    this.ContactNumber = player.ContactNumber
    this.City = player.City
    this.StateOrProvince = player.StateOrProvince
    this.Team = player.Team
    this.Speciality = player.Speciality
    this.Company = player.Company
    this.UserName = player.UserName
    this.Password = player.Password
};
Registration.registerPlayer = function (newPlayer, result) {    
        sql.query("INSERT INTO registration_data_tbl set ?", newPlayer, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};

module.exports= Registration;