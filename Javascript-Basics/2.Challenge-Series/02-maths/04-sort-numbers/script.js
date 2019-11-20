/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        let str = document.getElementById("numbers").value;
        // get id tag in html code
        let arr = str.split(",");
        arr = arr.sort(function(a, b) { return a - b });
        // sort numbers in asending order
        alert(arr);

    });

})();