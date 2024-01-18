class AppError extends Error (
 contructor(message,statusCode){


  super(message);
  this.statusCode = statuCode;
  Error.captureStackTrace(This,this.contructor)
  
 }
)