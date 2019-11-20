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

document.write(`<ul>`);
for (let i = 0; i < movies.length; i++) {
    document.write(`<li>${movies[i]}</li>`);
}
document.write(`</ul>`);