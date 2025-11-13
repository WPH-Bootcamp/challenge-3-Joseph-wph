"use strict";

const prompt = require("prompt-sync")({ sigint: true });

// Number
function getvalidNumberInput(promptMessage) {
  let input;
  let number;

  while (true) {
    input = prompt(promptMessage);
    number = Number(input);

    if (!isNaN(number)) {
      return number;
    } else {
      console.log("Masukkan angka yang benar");
    }
  }
}

// Operator
function getvalidOperatorInput(promptMessage) {
  const validOperators = ["+", "-", "/", "*", "**"];
  let input;

  while (true) {
    input = prompt(promptMessage);

    if (validOperators.includes(input)) {
      return input;
    } else {
      console.log("Masukkan hanya operator berikut : +, -, /, *, **");
    }
  }
}

// Program
console.log("Selamat Datang di Program Kalkulator Saya");
console.log("Welcome To My Calculator");

const num1 = getvalidNumberInput("Silahkan masukkan angka pertama: ");
const operator = getvalidOperatorInput("Silahkan masukkan operatornya: ");
const num2 = getvalidNumberInput("Silahkan masukkan angka kedua: ");

let hasil;

switch (operator) {
  case "+":
    hasil = num1 + num2;
    break;
  case "-":
    hasil = num1 - num2;
    break;
  case "/":
    hasil = num1 / num2;
    break;
  case "*":
    hasil = num1 * num2;
    break;
  case "**":
    hasil = num1 ** num2;
    break;
}
console.log(`\nHasil: ${num1} ${operator} ${num2} = ${hasil}`);
