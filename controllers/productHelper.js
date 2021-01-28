exports.validateInput = function(res, req, next){
    let isValid= true;

    console.log(req.body);
    
    //console.log(req.body.name);

    if(isValid){
        next();
    }
    
}