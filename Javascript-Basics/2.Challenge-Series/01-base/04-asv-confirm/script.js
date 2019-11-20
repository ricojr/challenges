/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

do {
    var age = prompt("How Young Are You?")
    var gender = prompt("Man, Woman or LadyBoy?")
    var town = prompt("Where do u live?")




    Confirmed = confirm('Correct? ' + 'You are ' + age + ' a ' + gender + ' and you live in ' + town);

    if (Confirmed == true) {
        alert('Great!');
    } else {
        alert('Please try again :)');
    }

} while (!Confirmed);