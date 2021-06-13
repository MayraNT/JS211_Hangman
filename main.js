let words = [
  "information",
  "available",
  "copyright",
  "university",
  "management",
  "international",
  "development",
  "education",
  "community",
  "technology",
  "following",
  "resources",
  "including",
  "directory",
  "government",
  "department",
  "description",
  "insurance",
  "different",
  "categories",
  "conditions",
  "accessories",
  "september",
  "questions",
  "application",
  "financial",
  "equipment",
  "performance",
  "experience",
  "important",
  "activities",
  "additional",
  "something",
  "professional",
  "committee",
  "washington",
  "california",
  "reference",
  "companies",
  "computers",
  "president",
  "australia",
  "discussion",
  "entertainment",
  "agreement",
  "marketing",
  "association",
  "collection",
  "solutions",
  "electronics",
  "technical",
  "microsoft",
  "conference",
  "environment",
  "statement",
  "downloads",
  "applications",
  "requirements",
  "individual",
  "subscribe",
  "everything",
  "production",
  "commercial",
  "advertising",
  "treatment",
  "newsletter",
  "knowledge",
  "currently",
  "construction",
  "registered",
  "protection",
  "engineering",
  "published",
  "corporate",
  "customers",
  "materials",
  "countries",
  "standards",
  "political",
  "advertise",
  "environmental",
  "availability",
  "employment",
  "commission",
  "administration",
  "institute",
  "sponsored",
  "electronic",
  "condition",
  "effective",
  "organization",
  "selection",
  "corporation",
  "executive",
  "necessary",
  "according",
  "particular",
  "facilities",
  "opportunities",
  "appropriate"
];

// generate a random word
const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

// create an array of blanks for the random word generated, and a split array of the generated word 
const generateBlanks = () => {
  let arr = [];
  for (let i = 0; i < word.length; i++) {
    arr[i] = "_";
  }
  return arr.join(" ");
};

const printBoard = () => {
  let answerArr = generateBlanks(word);
  return answerArr;
}

// if the guessed letter is included in the word, insert that guess in the answer arr and subtract 1 from remaining letters
// if the guessed letter is not included in the word, subtract from wrong guesses remaining
const checkLetter = (answerArr, word, guess) => {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === guess) {
      answerArr[i] = guess;
      remainingLetters--;
    } else if (word[i] !== guess) {
      wrongGuessesRemaining--;
    }
  }
};

// if the player guessed all the letters correctly or ran out of lives, the game is over
const gameOver = () => {
  if (remainingLetters === 0 || wrongGuessesRemaining === 0) {
    return true;
  } else {
    return false;
  }
}


let word = getRandomWord(words);
let remainingLetters = word.length;
let wrongGuessesRemaining = 6;
console.log(printBoard());
console.log('Remaining Letters: ' + remainingLetters + ', Lives: ' + wrongGuessesRemaining);