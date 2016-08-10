/**
 * Created by SONY on 2016/8/10.
 */
var mongoose = require("mongoose");

module.exports = {
    collect : function(){
        mongoose.connect('mongodb://localhost/mongoosedb-demo');
    },
    close :function () {
        mongoose.close();
    }
}