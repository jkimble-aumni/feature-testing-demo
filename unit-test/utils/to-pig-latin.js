export default function toPigLatin(phrase) {
  var sentence = phrase.split(" ");
  var piggedPhrase = [];

  for (var i = 0; i <= sentence.length - 1; i++) {
    piggedPhrase.push(pigWord(sentence[i].toLowerCase()));
  }
  return piggedPhrase.join(" ");
}

function pigWord(word) {
  const specialChars = ["!", ",", ".", ";"];
  const first = word.slice(findFirstVowel(word), word.length);
  const last = first[first.length - 1];
  const second = word.slice(-word.length, findFirstVowel(word));

  if (last && specialChars.includes(last)) {
    return `${first.slice(0, -1)}${second}ay${last}`;
  }

  return `${first}${second}ay`;
}

function findFirstVowel(word) {
  var vowels = ["a", "e", "i", "o", "u"];

  for (var i = 0; i <= word.length - 1; i++) {
    if (vowels.indexOf(word[i]) !== -1) {
      return i;
    }
  }
  return word.length;
}
