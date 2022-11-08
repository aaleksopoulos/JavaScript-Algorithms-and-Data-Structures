function telephoneCheck(str) {
    //if it contains any parenthesis, it should also close it and str should not start with hyphen
    if ((str.includes('(') &&  !str.includes(')')) || (str.includes(')') &&  !str.includes('(')) || (str[0]==='-')){
        return false
    }
    //then we remove all punctuation 
    let punctRegex = /[()-*&a-zA-Z-/_]/g;

    //replace the regex with space and replace multiple space characters with 1
    str = str.replace(punctRegex, ' ').replace(/\s+/g, ' ').trim()

    //the 2 mathcing cases
    const matchingRegex1 = /^(1\s){0,1}5{10}/;
    const matchingRegex2 = /^(1\s){0,1}\d{3}\s{1}\d{3}\s{1}\d{4}/;

    return matchingRegex1.test(str) || matchingRegex2.test(str)
  }
  
  console.log(telephoneCheck("1 555-555-5555"));