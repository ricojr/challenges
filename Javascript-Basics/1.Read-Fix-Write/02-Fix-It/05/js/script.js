const shows = [
    `legion`,
    `sneaky pete`,
    `santa clarita diet`,
    `riverdale`,
    `the young pope`,
    `a series of unfortunate events`,
    `taboo`,
    `colony`,
    `24: legacy`,
    `speechless`,
    `scherlock`,
    `stranger things`,
    `this is us`,
    `timeless`,
    `the oa`,
];
const wrapWithTag = (content, tagname) =>
    `<${tagname}>${content}</${tagname}>`;


const writeTitle = title => {
    const newTitle = uCFirst(title);
    document.write(wrapWithTag(newTitle, `li`));
};

const uCFirst = sentence => {
    var words = sentence.split(` `);
    words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return words.join(' ');
};

document.write(`<ol>`);
shows.forEach(shows => writeTitle(shows, `li`));
document.write(`</ol>`);