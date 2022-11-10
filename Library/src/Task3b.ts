module.exports = function incomesOfGroups(group:string){
if(group == 'А'){
// calculation of full incomes without taxes
    let full = 100 * Math.abs(Math.sin(4)*Math.cos(Math.pow(4,2)*Math.sin(4+1.4)+5.14)+54);
// calculation of full incomes with taxes
    let unfull = full - full * 0.1;
    console.log("group A");
    console.log(unfull);
}else if (group == "Б"){
    
    let full = 150 * Math.abs(Math.abs(Math.sin(2*4-1.5)+3*Math.sin(Math.pow(4,2))+2.38+104));
    let unfull = full - full * 0.15;
    console.log("group Б");
    console.log(unfull);
} else{
    
    let full = 200 * Math.abs(Math.cos(Math.pow(4,2)*Math.sin(2*4-1) + 4.29 + 135));
    let unfull = full - full * 0.2;
    console.log("group В")
    console.log(unfull);
}
}