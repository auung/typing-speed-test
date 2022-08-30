// This func splits argument string into an array of objects
// with each letter into a value of "letter" key.
// The first object has status value of "current".
export function getTextArray(paragraph) {
  const array = [];
  const temp1 = paragraph[0].content.split("");
  const temp2 = paragraph[1].content.split("");
  for (let i = 0; i < temp1.length; i++) {
    if (i === 0) {
      array.push({letter: temp1[i], status: "current", id: i});
    } else {
      array.push({letter: temp1[i], status: "", id: i});
    }
  }
  for (let i = 0; i < temp2.length; i++) {
    array.push({letter: temp2[i], status: "", id: i + temp1.length});
  }
  return array;
}

export function calcWpm(total, error, incorrect, time) {
  let gross = Math.round((total / 5) / (time / 60));
  let net = Math.round(((total / 5) - incorrect) / (time / 60));
  let accuracy = Math.round(((total - error) / total) * 100);
  return {gross, net, accuracy};
}