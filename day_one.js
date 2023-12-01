"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * */
var fs_1 = require("fs");
var dataPath = './data/day_one.txt';
var dataRaw = (0, fs_1.readFileSync)(dataPath, 'utf8');
var dataArr = dataRaw.split('\n');
var alphabet = {
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
function partOneSolution(calibrationValues) {
    var size = calibrationValues.length;
    var result = 0;
    var temp = "";
    for (var calibrationValue = 0; calibrationValue < size; ++calibrationValue) {
        var calibration = calibrationValues[calibrationValue];
        for (var character = 0; character < calibration.length; ++character) {
            var singleCharacter = calibration[character];
            if (!alphabet[singleCharacter]) {
                if (temp.length > 1) {
                    temp = temp[0];
                }
                temp = temp + singleCharacter;
            }
        }
        if (temp.length === 1) {
            temp += temp;
        }
        if (temp.length > 0) {
            result += parseInt(temp);
        }
        temp = "";
    }
    return result;
}
console.log(partOneSolution(dataArr));
// Below is an attempt at part two.
var numbers = {
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
function partTwoSolution(calibrationValues) {
    var size = calibrationValues.length;
    var result = 0;
    var temp = "";
    return result;
}
