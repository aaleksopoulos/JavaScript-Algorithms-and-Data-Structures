const convertionMatrix = {
    1   : 'I',
    4   : 'IV',
    5   : 'V',
    9   : 'IX',
    10  : 'X',
    40  : 'XL',
    50  : 'L',
    90  : 'XC',
    100 : 'C',
    400 : 'CD',
    500 : 'D',
    900 : 'CM',
    1000: 'M'

}

function recursiveConvertToRoman(num) {
    
    let matrixKeys = Object.keys(convertionMatrix);

    // base case is if num is between 1 and 4 inclusive
    if (num<matrixKeys[1]){
        return convertionMatrix[matrixKeys[0]].repeat(num);
    }
    else{
        for (let i=matrixKeys.length-1; i>=0; i--){
            if (matrixKeys[i]<=num){
                // the return should be the corresponding value times the result of the division and repeat the process with the remainder of the number and the key found
                return convertionMatrix[matrixKeys[i]].repeat(Math.floor(num/matrixKeys[i])) + recursiveConvertToRoman(num%matrixKeys[i]);
            }
        }
    }

}



function convertToRoman(num) {
    
    let matrixKeys = Object.keys(convertionMatrix);
    let ret = '';
    // console.log(matrixKeys);
    // loop over the keys in reverse order to find the maximum of them that is smaller than the given number
    for (let i=matrixKeys.length-1; i>=0; i--){
        
        if (matrixKeys[i]<=num){
            // console.log(matrixKeys[i]);
            // the return should be the corresponding value times the result of the division
            ret += convertionMatrix[matrixKeys[i]].repeat(Math.floor(num/matrixKeys[i]));
            
            // console.log(ret);
            //update the number to the remainder 
            num = num%matrixKeys[i];
            // console.log(num);

        }
    }
    // console.log(ret);
    return ret;
   }
   
console.log('not recursive result: ', convertToRoman(97));
console.log('recursive result: ', recursiveConvertToRoman(97));