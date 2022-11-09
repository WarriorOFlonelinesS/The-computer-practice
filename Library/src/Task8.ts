module.exports = function countAndMultiplication(k:number,i:number){
var cnt = 0
var Pr = 1
console.log("x", "y" )
while(k <= i){
  
  let y = (Math.abs(Math.sin(k)/3.12+Math.cos(Math.pow(k,2)))-8.3*Math.sin(3*k)/k);
  k+=0.4;
//  if y is a positive number - multiplication, if y is a negative number - conunt 
  if (y<0){
    Pr *= y 
  }else{
    cnt++ 
 
}
console.log(k,y)
}
console.log("Count of positive numbers:", cnt)
console.log("Multiplication of negative numbers:",Pr)
}
