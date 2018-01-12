let getArea = function(parameters){
    try{
        if(typeof parameters[0] === 'number' && typeof parameters[1] === 'number'){ //type check
            if(parameters[0] >= 0 && parameters[1] >= 0){ //range check
                if(parameters.length == 2){ //array check
                    return parameters[0] * parameters[1];
                }
            }
        }
        //return -1;
        throw new Error("Invalid parameters");
    } catch (e){
        return -1;
    }
}

module.exports = {
    getArea
}