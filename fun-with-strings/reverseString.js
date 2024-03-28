//initalize a variable called someStr to some string of your choice
//create a named function that takes an argument 'str'
//in the function reversestr`
//return `str`
//outside of the function log the funtion and pass someStr
var someStr = "hello hello";
function reverseStr(str) {
    str = str.split("").reverse().join("")
    return str;
}
console.log(reverseStr(someStr));