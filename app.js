
const express = require('express');
const{ avr, convertAndValidateNumsArray, findMedian} = require('./funcs')

const ExpressError = require("./errors");


const app = express();



app.get("/mean", function(req,res){
    if(!req.query.nums){
        throw new ExpressError('you need to pass a list of comma-separated numbers', 400)
    }
    let numsAsStrings = req.query.nums.split(',')
    let nums = convertAndValidateNumsArray(numsAsStrings)


    let result ={
        operation : "mean",
        value : avr(nums)

    }
    return res.send(result)
   
    
})


app.get("/median", function(req,res){
    if (!req.query.nums) {
      throw new ExpressError(
        "you need to pass a list of comma-separated numbers",
        400
      );
    }
    let numsAsStrings = req.query.nums.split(",");
    let nums = convertAndValidateNumsArray(numsAsStrings);


    let result = {
      operation: "median",
      value: findMedian(nums),
    };
    return res.send(result);
   

})










app.use(function (req, res, next) {
  const err = new ExpressError("Not Found", 404);

  // pass the error to the next piece of middleware
  return next(err);
});

/** general error handler */

app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message,
  });
});








app.listen(3000,()=>{
    console.log("app on port 3000")
})