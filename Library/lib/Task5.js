"use strict";
module.exports = function tableOfMeassers(n) {
    // initialization of veriables 
    let m = 0.068;
    let drahm = 0.038378;
    // outputting of measuries' names 
    console.log("gran" + ' ' + 'm' + " " + "drahm");
    for (let gran = 1; gran <= n; gran++) {
        // outptuting the result as a table 
        console.log(gran, Math.floor((m * gran) * 100) / 100, Math.floor((drahm * gran) * 100) / 100);
    }
};
//# sourceMappingURL=Task5.js.map