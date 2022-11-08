const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function rot13(str, cipherNum=13) {
    //made a minor modification, to be able to set the number of the character shifts that we perform
    let res = '';
    for (let char of str.toUpperCase()) {
        if (alphabet.includes(char)){
            res += alphabet.charAt((alphabet.indexOf(char)+cipherNum)%alphabet.length)
        }
        else{
            res += char;
        }
    }
    return res;
  }

 
console.log(rot13("SERR PBQR PNZC"));