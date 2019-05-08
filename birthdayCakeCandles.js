function birthdayCakeCandles(ar) {
    var max = Math.max(...ar);
    return ar.filter(i => i === max).length;
}

//only able to return max of 2 candles cause thats what we're looking for 
//then we filter out array to have just the max length of integers