"use strict";
module.exports = function summAndMultiplaction(k) {
    let x = 0, y = 1;
    for (let i = 9; k <= i; k++) {
        // summation
        x += Math.cos(Math.pow(k, 2) + 1) - Math.abs(Math.sin(2 * k - 5.76));
        // multiplication
        y *= Math.sin(k) - Math.cos(Math.pow(k, 3)) * Math.sin(Math.pow(k, 2) - 4.2) + 4.21;
    }
    // calculation of z
    let z = Math.pow(x + y, 2);
    console.log(z);
};
//# sourceMappingURL=Task6.js.map