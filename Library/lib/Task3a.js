"use strict";
module.exports = function conditions(x, a, b, c, d) {
    // if x >= 10 then function φ or if x < 10 then function ω
    if (x >= 10) {
        let k = φ(a, b, x);
        // calculation of the main function
        let f1 = Math.abs(Math.sin(2 * k - 1.5) + 3 * Math.sin(Math.pow(k, 2)) + 2.3);
        console.log("f1 is:");
        console.log(f1);
    }
    else {
        let k = ω(c, d, x);
        let f2 = Math.abs(Math.sin(2 * k - 1.5) + 3 * Math.sin(Math.pow(k, 2)) + 2.3);
        console.log("f2 is:");
        console.log(f2);
    }
    function φ(a, b, x) {
        let result = Math.tan(x + a) - Math.log2(b + 7);
        return result;
    }
    function ω(c, d, x) {
        let result = Math.pow(c, 5) * Math.sqrt(Math.pow(x, 2) + d * Math.pow(Math.E, 1.3));
        return result;
    }
};
//# sourceMappingURL=Task3a.js.map