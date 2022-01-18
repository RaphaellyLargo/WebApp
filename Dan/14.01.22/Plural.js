const maybePluralize = (count, noun, suffix = 's') =>
  `${count} ${noun}${count !== 1 ? suffix : ''}`;

  maybePluralize(0, 'buch'); // 0 bücher
maybePluralize(1, 'buch'); // 1 buch
maybePluralize(2, 'buch', 'er'); // 2 bücher
maybePluralize(3, 'buch', 'er'); // 3 lampen



const endWithE = [];
const endWithER = [];
const endWithS = [];
let wordTest = 'Lampe';
let wordTest2 = 'Auto';

function germanPluralizer (singularWord) {
    if((singularWord[singularWord.lenght-1]).includes('e')) {
        singularWord += 'n'
    } else if((singularWord[singularWord.lenght-1].includes('o'))) {
    return singularWord += 's'
}
return singularWord;
}
console.log(germanPluralizer(WordTest))