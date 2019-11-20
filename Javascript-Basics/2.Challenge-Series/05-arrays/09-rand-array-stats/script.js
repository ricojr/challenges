/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


let bTn = document.getElementById("run");
bTn.addEventListener("click", function() {


    let tableRow = document.querySelectorAll("td");


    tableRow.forEach(tabledata => {
        var randomNum = Math.floor(Math.random() * 100 + 1);
        tabledata.textContent = randomNum;
    })

})