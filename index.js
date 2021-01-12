const str = `Dave Baker is an Elite {crew member|production crew member|video crew member}. This {designation|status|label|classification} by Assignment Desk is {an extra|an additional|a supplementary|yet another|one extra|one additional} {sign|mark|signal|indication|symbol|endorsement} of {quality|high quality|top quality|good quality|excellence|top notch quality|outstanding quality|superior quality|high-quality|value|superiority}. Elite {crews|crew members|production crew members|video crew members} {have been|are actually|are already|are entirely|have been completely} {vetted|checked} by Assignment Desk as {crew members|production crew members|video crew members|film staff} {that have been|who have been|which have been} on shoots {many times|often|frequently|repeatedly|on numerous occasions|again and again|many times before} with {quality|high quality|top notch|excellent} equipment. {You can trust that|You can rely on|You can be confident|You can depend on|Have confidence} that an Elite {crew|staff member} {will|will certainly|is going to|would certainly|will definitely} {bring|deliver|provide} {an extra|an additional} {level of|amount of|degree of} service on your shoot.`;

//find curly brace items
//replace with randomChoice items
//for each /\{|\}/gi replace /\{|\}/gi with

function getRandomOption(str) {
    if
}

function change(str) {
  const divider = /{([\s\S]*?)}/;

  result = str.split(divider);
  let array = [...result];
  let array2 = [...result];
  let array3 = [];

  let mappedArray = array.map((el) => (el.includes("|") ? el.split("|") : ""));
  let filteredArray = mappedArray.filter((el) => el);
  let randomChoice = filteredArray.map(
    (array) => array[Math.floor(Math.random() * array.length)]
  );

  console.log("The random choice", randomChoice);
  console.log("This is the result", result);
  console.log("This is the mapped array", mappedArray);
  console.log("This is the filtered array", filteredArray);
  //   console.log("This is the result2", result2);

  //   console.log("This is the array2", array2);
  return randomChoice;
}

console.log("This is the changed string", change(str));

//   let mappedArray = array.map((el) => (el.includes("|") ? el.split("|") : ""));
//   let filteredArray = mappedArray.filter((el) => el);
//   let randomChoice = filteredArray.map(
//     (array) => array[Math.floor(Math.random() * array.length)]
//   );

//   let filteredResult = mappedResult.filter((el) => el);

//   let newResult = filteredResult.splice(0, filteredResult.length, randomChoice);

//   console.log("This is the bracketContent", randomChoice);
//   console.log("These are the choices", choices);
//   console.log("These are the individual choices", contentOptions);

//   let finalString = str.replace(/\{|\}/gi, randomChoice);

//   return finalString;
