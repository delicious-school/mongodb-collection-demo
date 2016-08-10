/**
 * Created by SONY on 2016/8/10.
 */
var db = require('./db');
var User = require('./entity');
db.collect();
User.find({},function(err,users){
    if(err) throw  err;
    console.log("All users");
    console.log(users);
});
User.findOne({name:"aym"},function(err,users){
    if(err) throw  err;
    console.log("one user");
    console.log(users);
});