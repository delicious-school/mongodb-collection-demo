/**
 * Created by SONY on 2016/8/10.
 */
var db = require("./db");
var User  = require("./entity");

db.collect();
User.update({age:"33",name:" aaa"},function(err,user){
if(err) throw  err;
    console.log("update user:");
    console.log(user);
});