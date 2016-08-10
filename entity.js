/**
 * Created by SONY on 2016/8/10.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    age: String,
    password:String
});

// the collection's name is `users`
var User = mongoose.model('User', userSchema);

module.exports = User;