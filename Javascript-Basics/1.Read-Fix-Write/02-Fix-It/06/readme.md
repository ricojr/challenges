# FIX IT
## EX 06
* We only want to display the shows with a score of 90 or more. You can only make adjustments after line 65.
* Display the score next to the title. Use the following formatting: `colony (100%)`

Added a const formatMovieTitle to print the title and the score.
Added a const filtered to filter the scores above 90%.
const topScoreFilter = show => show.score >= 90, will print the const and show score above 90. 

filtered.forEach(show => document.write(wrapWithTag(formatMovieTitle(show.title, show.score), `li`)));
                                        two constant must be inserted between parentheses + the declaration to be printed.


No return is added in de code