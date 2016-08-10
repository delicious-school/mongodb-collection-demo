/**
 * Created by SONY on 2016/8/10.
 */
var db = require("./db");
var User  = require("./entity");

db.collect();
User.remove({},function(err,user){
    if(err) throw  err;
    console.log("delete users:");
    console.log(user);
});