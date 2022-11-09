"use strict";
module.exports = function sumTo() {
    let k = 0;
    // the begining summ
    while (true) {
        let sum = 0;
        // summmation 
        sum -= Math.abs(Math.sin(k) / 3.12 + Math.cos(Math.pow(k, 2))) - 8.3 * Math.sin(3 * k) / k;
        k++;
        console.log(sum);
    }
};
//# sourceMappingURL=Task7a.js.map