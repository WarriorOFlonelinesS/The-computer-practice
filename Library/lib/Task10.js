"use strict";
//  module exporting
module.exports = function array(k, i) {
    // creating an array
    let array = [];
    while (i <= k) {
        // creating element of y
        let y = 2 * Math.sin(i) * Math.sin(2 * i + 1.5) * Math.cos(2 * i + 1.5) - 6;
        i++;
        // pushing these elements to the array 
        array.push(y * (-1));
    }
    // outputting a minimal value 
    console.log(Math.min.apply(null, array));
};
//# sourceMappingURL=Task10.js.map