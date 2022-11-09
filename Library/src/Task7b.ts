module.exports =  function sumToInterval() {
  // the begining summ
let i =  Infinity
let k = 0  
while(k<i){
  let sum = 0;
//  calculation a factorial of k and summation

    sum += Math.pow(-1,k) * (Math.abs(Math.sin(k)/3.12+Math.cos(Math.pow(k,2)))-8.3*Math.sin(3*k))*Math.pow(0.9,k);
    k++
    console.log(sum)
  }

}
