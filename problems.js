Problem 1

let num=13;
let count=0;
for(let i=0;i<=num;i++){
if(num%i==0){
count++;
}
}if(count==2){
console.log("It is a prime number");
}else{
console.log("It is not prime number");
}


Problem 2
let srt="hello";
let new_str="";
for(let i=str.length-1;i>=0;i--){
new_str+=new_str+str[i];
}if(str==new_str){
console.log("It is  palindrome");
}else{
console.log("It is not a palindrome");
}