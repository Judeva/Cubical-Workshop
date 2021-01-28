exports.validateInput = function(req, res, next){
    let isValid= true;

    let {name, description, imageUrl, difficultyLevel} = req.body;

    if(name===''||name.length<2){
        isValid =false;
        console.error('You should enter a valid name');
    }
    if(description===''||description.length<2){
        isValid =false;
        console.error('You should enter a valid description');
    }
    if(imageUrl===''||imageUrl.length<10){
        isValid =false;
        console.error('You should enter a valid image URL');
    }
   
    if(isValid){
        next();
    }
    
}