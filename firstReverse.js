//reverse an input string
//lets do this manually!

//simple way is to create a new string and fill it with chars from original string, but backwards

function firstReverse(str){
    var newString = " ";
    for(var i = str.length -1; i>= 0; i--){
        newString = newString + str.charAt(i);
    }
    return newString
}

function firstReverse(str){
    return str.split(' ').reverse().join(' ');
}