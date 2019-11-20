const movies = [
    `Martin Eden`,
    `La Belle Époque`,
    `Minga: Stemmen van weerstand`,
    `Mijn bijzonder rare week met tess`,
    `The Mustang`,
    `Joker`,
    `Downtown Abbey`,
    `Parasite`,
    `Once upon a time... in Hollywood`,
    `Hors Normes`,
    `Everest: De jonge yeti`,
    `Minuscule 2: Het tropische avontuur`,

];

var reversed = movies.reverse();
// variable must be placed on top to print the declaration //

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

const lowerCaseMovies = movies.map(movie => movie.toLowerCase());



document.write(`<ul>`); {


    lowerCaseMovies.forEach(movie => document.write(wrapWithTag(movie, `li`)));

}
document.write(`</ul>`);