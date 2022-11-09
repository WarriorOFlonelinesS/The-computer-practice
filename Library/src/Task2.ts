module.exports = function medianAndHeight(x1:number, y1:number, x2:number, y2:number, x3:number, y3:number){
// calculation sides of a triangel
let AB = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));

let AC = Math.sqrt(Math.pow((x3-x1),2)+Math.pow((y3-y1),2));

let BC = Math.sqrt(Math.pow((x3-x2),2)+Math.pow((y3-y2),2));

console.log(height())
console.log(median())
// calculation the height of the triangel
function height(){
    let p = (AB+BC+AC)/2;
    let H = 2/AB * Math.sqrt( p*( p-AB )*( p-AC )*( p-BC ) ) 
    return H
}
// calculation the median of the triangel
function median(){
    let M = 1/2 * Math.sqrt(Math.pow(2*AC,2) + Math.pow(2*AB,2) - Math.pow(AC,2))
    return M
} 
}