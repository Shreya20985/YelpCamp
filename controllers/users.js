const User=require('../models/user');

module.exports.renderRegister=(req,res)=>{
    res.render('users/register');
}
module.exports.register=async(req,res,next)=>{
    try{
   const {email,username,password}=req.body;
   const user=new User({email,username});
   const registeredUser=await User.register(user,password);
   req.login(registeredUser,err=>{//this we added so that after we register we are direcltly logged in and we do need to log in again after registering
    if(err) return next(err);
     req.flash('success','Welcome to Yelp Camp');
   res.redirect('/campgrounds');
   })
    }catch(e){
        req.flash('error',e.message);
        res.redirect('register');
    }
}
module.exports.renderLogin=(req,res)=>{
    res.render('users/login');
}
module.exports.login=(req,res)=>{
    req.flash('success','welcome back');
    let redirectUrl=res.locals.returnTo || '/campgrounds';
   delete req.session.returnTo;
    res.redirect(redirectUrl);

}
module.exports.logout=(req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Goodbye!');
        res.redirect('/campgrounds');
    });
}