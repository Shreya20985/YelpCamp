class ExpressError extends Error{
    constructor(message,statusCode){
        super();//this will cal the constructor of the Error class
        this.message=message;
        this.statusCode=statusCode;
    }
}
module.exports=ExpressError;