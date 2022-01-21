const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

const decode = (expr) => {
  const divByTen = [];
  let tempStr = "";
  let tempArr = [];
  let finStr = "";
  for (let i = 0; i < expr.length; i += 10) {
    divByTen.push(expr.slice(i, i + 10));
  }
  for (let i = 0; i < divByTen.length; i++) {
    for (let j = 0; j < divByTen[i].length; j++) {
      if (divByTen[i][j] === "0" && divByTen[i][j + 1] === "0") {
        j++;
        continue;
      }
      if (divByTen[i][j] === "*") {
        tempStr += " ";
        break;
      }
      if (divByTen[i][j] === "1" && divByTen[i][j + 1] === "0") {
        tempStr += ".";
        j++;
      }
      if (divByTen[i][j] === "1" && divByTen[i][j + 1] === "1") {
        tempStr += "-";
        j++;
      }
    }
    tempArr.push(tempStr);
    tempStr = "";
  }
  // console.log(tempArr);
  [...tempArr].map((el) => {
    if (el === " ") {
      finStr += " ";
      // console.log(" space ");
    } else {
      // console.log(el);
      finStr += MORSE_TABLE[el];
    }
  });

  return finStr;
};

// const val =
//   "000000001100101010100000000010**********00111110110000101011000000101000111011100000111011**********00111010100000101110000011111100001011110000001110**********001010111000001111110011101011**********00101111110000101011000000111100101111100000101010**********0000111111001010101100000000100000101110**********000000001100101010100000000010**********0010111010000000101100111110100011101111**********000011101000001111110000111110";
// const decode = (val) => {
//   const divByTen = [];
//   let tempString = "";
//   let tempArr = [];
//   let finStr = "";
//   for (let i = 0; i < val.length; i += 10) {
//     divByTen.push(val.slice(i, i + 10));
//   }
//   for (let i = 0; i < divByTen.length; i++) {
//     for (let j = 0; j < divByTen[i].length; j++) {
//       if (divByTen[i][j] === "0" && divByTen[i][j + 1] === "0") {
//         j++;
//         continue;
//       }
//       if (divByTen[i][j] === "*") {
//         tempString += " ";
//         break;
//       }
//       if (divByTen[i][j] === "1" && divByTen[i][j + 1] === "0") {
//         tempString += ".";
//         j++;
//       }
//       if (divByTen[i][j] === "1" && divByTen[i][j + 1] === "1") {
//         tempString += "-";
//         j++;
//       }
//     }
//     tempArr.push(tempString);
//     tempString = "";
//   }
//   console.log(tempArr);
//   [...tempArr].map((el) => {
//     if (el === " ") {
//       finStr += " ";
//       console.log(" space ");
//     } else {
//       console.log(el);
//       finStr += MORSE_TABLE[el];
//     }
//   });

//   return finStr;
// };
// console.log(decode(val));
module.exports = {
  decode,
};
