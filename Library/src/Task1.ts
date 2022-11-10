module.exports = function perimeterAndArea(a:number, b:number,c:number){
// convertation the string to the number

let highBasicOfTrapezium = Number(a);
let lowBasicOfTrapezium = Number(b);
let BasicsOfTrapezium = Number(c);

console.log("Perimeter is:");
console.log(perimeter(highBasicOfTrapezium,lowBasicOfTrapezium,BasicsOfTrapezium ));
console.log("Area is");
console.log(area(highBasicOfTrapezium,lowBasicOfTrapezium,BasicsOfTrapezium ));
// calculation the perimeter of a trapezium
function perimeter(highBasicOfTrapezium:number, lowBasicOfTrapezium:number, BasicsOfTrapezium:number){
    let P = highBasicOfTrapezium + lowBasicOfTrapezium + BasicsOfTrapezium * 2;
    return P;
};
// calculation the area of the trapezium
function area(highBasicOfTrapezium:number, lowBasicOfTrapezium:number, BasicsOfTrapezium:number){
   let S = ((highBasicOfTrapezium+lowBasicOfTrapezium)/2) * Math.sqrt((BasicsOfTrapezium**2)-(((highBasicOfTrapezium-lowBasicOfTrapezium)**2)/4));
    return S;
}}
