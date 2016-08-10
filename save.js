/**
 * Created by SONY on 2016/8/10.
 */
var db = require('./db');
var User = require('./entity');

var aym = new User({
    name:"ddd",
    age:"21",
    password:"123456"
});
db.collect();
aym.save(function(err){
    if(err) throw err;
    console.log("user saved");
    db.close;
});