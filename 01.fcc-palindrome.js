const cleanUpStr = (str) => {
    // remove all non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    // console.log(str);
    return str;
}

function palindrome(str) {
  // call the helper function to clean up the given input
  str = cleanUpStr(str);
  // method1 
  /*
    // loop over start and end of the string to check equality of characters
    for (let i=0; i<=str.length/2; i++){
      if (str[i]!==str[str.length-1-i]){
        console.log(i, str[i], str[str.length-1-i]);
        return false;
      }
    }
    // if we managed to get here, it is a palindrome
    return true;
  */
    // method2
    // reverse the given string and check equality
    let str2 = [...str].reverse().join('');
    // console.log(str2);
    return str2===str ? true: false;
  }
  
  // palindrome("eee");
  console.log(palindrome("eeee"));