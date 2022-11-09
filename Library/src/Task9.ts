module.exports = function PNL(years:number) {
// initialitation of; variables 
var cnt = 0 ;
var array = [];

// cicle of calculation incomes 
for(let k = 1992; k <= years; k++){
   let b = Math.abs( Math.sin(k/3.12 + Math.cos(Math.pow(k,2)) - 8.3 * Math.sin(3*k)))*1000
// outputting years and incomes  
   console.log(k,b);

// calculation of years with incomes that between 500 and 1000
    if(b>=500 && b<=1000){
       cnt++;
        
    }else{
       
    }
// pushing b in the array
    array.push(b);   
}
// outputting cnt 
console.log(cnt +" "+"років підряд доходів було менше 1000, але більше 500 у.е.");
// outputting the lesion 
console.log("Найбільший збиток:",Math.min.apply(null, array));
}
