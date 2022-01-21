// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

let str = 'Web Development Tutorial';

lostr = (a)=>{
    let newStr = a.split(" ");
    let result = newStr[0];
    
    for(i=0; i<newStr.length; i++){
        if(result.length < newStr[i].length){
                result = newStr[i];
        }
    }
    return result;
}

console.log(lostr(str));
