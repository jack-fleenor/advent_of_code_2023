/**
 *  
 * */
import { readFileSync } from "fs";

const dataPath = './data/day_one.txt';
const dataRaw = readFileSync(dataPath, 'utf8');
const dataArr : string[] = dataRaw.split('\n');

const alphabet : { [k: string]: boolean } = {
  'a': true,
  'b': true,
  'c': true,
  'd': true,
  'e': true,
  'f': true,
  'g': true,
  'h': true,
  'i': true,
  'j': true,
  'k': true,
  'l': true,
  'm': true,
  'n': true,
  'o': true,
  'p': true,
  'q': true,
  'r': true,
  's': true,
  't': true,
  'u': true,
  'v': true,
  'w': true,
  'x': true,
  'y': true,
  'z': true
};

function partOneSolution(calibrationValues: string[]) : number {
  const size = calibrationValues.length;
  let result : number = 0;
  let temp : string = "";

  for(let calibrationValue = 0; calibrationValue < size; ++calibrationValue)
  {
    const calibration = calibrationValues[calibrationValue];
    for(let character = 0; character < calibration.length; ++character)
    {
      const singleCharacter = calibration[character];
      if(!alphabet[singleCharacter]){
        if(temp.length > 1){
          temp = temp[0];
        }
        temp = temp + singleCharacter;
      }
    }
    if(temp.length === 1){
      temp += temp;
    }
    if(temp.length > 0){
      result += parseInt(temp);
    }
    temp = "";
  }
  return result;
}
console.log(partOneSolution(dataArr));

// Below is an attempt at part two.

const numbers : { [k: string]: number } = {
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9
};

function partTwoSolution(calibrationValues: string[]) : number {
  const size = calibrationValues.length;
  let result : number = 0;
  let temp : string = "";
  return result;
}

