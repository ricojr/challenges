/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function changeBtncolor(color) {

    // your code here
    document.body.style.background = color;
}
(function() {
    document.getElementById("red").addEventListener("click", function() {
        changeBtncolor("red");
    });
    document.getElementById("green").addEventListener("click", function() {
        changeBtncolor("green");
    });
    document.getElementById("yellow").addEventListener("click", function() {
        changeBtncolor("yellow");
    });
    document.getElementById("blue").addEventListener("click", function() {
        changeBtncolor("blue");
    });


})();