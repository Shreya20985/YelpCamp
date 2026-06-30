const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const passportLocalMongoose=require('passport-local-mongoose');

const UserSchema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    }
});
//using passport local mongoose can see in passport docs
UserSchema.plugin(passportLocalMongoose.default);//this is going to add
//to our schema a username, a password, also it will make sure those usernames
//are unique, they are not duplicated and also gives some additional methods we can use
module.exports=mongoose.model('User',UserSchema);