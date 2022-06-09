// This func splits argument string into an array of objects
// with each letter into a value of "letter" key.
// The first object has status value of "current".
export function getTextArray(paragraph) {
  const temp = paragraph.split("");
  const array = [];
  for (let i = 0; i < temp.length; i++) {
    if (i === 0) {
      array.push({letter: temp[i], status: "current", id: i});
    } else {
      array.push({letter: temp[i], status: "", id: i});
    }
  }
  return array;
}

export function calcWpm(total, correct, incorrect, time) {
  let gross = Math.round((total / 5) / (time / 60));
  let net = Math.round(((total / 5) - incorrect) / (time / 60));
   return {gross, net};
}