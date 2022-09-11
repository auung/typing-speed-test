// This func splits argument string into an array of objects
// with each letter into a value of "letter" key.
// The first object has status value of "current".
export function getTextArray(paragraph) {
  const array = [];
  const temp = paragraph[0].content.split("");
  for (let i = 0; i <= temp.length; i++) {
    if (i === 0) {
      array.push({letter: temp[i], status: "current", id: i});
    } else {
      array.push({letter: temp[i], status: "", id: i});
    }
  }
  return array;
}

export function calcWpm(total, netTotal, error, incorrect, time) {
  let gross = Math.round((netTotal / 5) / (time / 60));
  let net = Math.round(((netTotal / 5) - incorrect) / (time / 60));
  let accuracy = Math.round(((total - error) / total) * 100);
  return {gross, net, accuracy};
}

const newLetter = (letter, status) => {
  const newItem = letter;
  newItem.status = status;
  return newItem;
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "correct":
      return state.map(letter => (letter.id === action.id) ? newLetter(letter, "correct") : letter);
    case "incorrect":
      return state.map(letter => (letter.id === action.id) ? newLetter(letter, "incorrect") : letter);
    case "current":
      return state.map(letter => (letter.id === action.id) ? newLetter(letter, "current") : letter);
    case "previous":
      return state.map((letter) => {
        if (letter.id === action.id) {
          return newLetter(letter, "current");
        }
        if (letter.id === action.id + 1) {
          return newLetter(letter, "");
        }
        return letter;
      });
    case "timeup":
      return state.map(letter => (letter.status === "current") ? newLetter(letter, "") : letter);
    case "first":
      return action.payload;
    default:
      return [];
  }
}