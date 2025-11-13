// code here, goodluck!!

"use strict";

const prompt = require("prompt-sync")({ sigint: true });

//Number
function getValidNumberInput(promptMessage) {
  let input;
  let number;

  while (true) { 
    input = prompt(promptMessage);
    number = Number(input);

    if (!isNaN(number)) {
      return number; 
    }
    else {
      console.log("❌ Input tidak valid. Masukkan angka yang benar!");
    }
  }
}

//Operator
function getValidOperatorInput(promptMessage) {
  const validOperators = ["+", "-", "*", "/", "%", "**"];
  let input;

  while (true) {
    input = prompt(promptMessage);

    if (validOperators.includes(input)) {
      return input;
    } else {
      console.log ("❌ Operator tidak valid. Gunakan salah satu dari: +, -, *, /, %, **");
    }
  }
}


//Program 1
console.log("=== Kalkulator Sederhana ===");
console.log("=== Welcome To My Calculator ===")

const num1 = getValidNumberInput("Masukkan angka pertama: ");
const operator = getValidOperatorInput("Masukkan operator (+, -, *, /, %, **): ");
const num2 = getValidNumberInput("Masukkan angka kedua: ");

let hasil;

switch (operator) {
  case "+": hasil = num1 + num2; break;
  case "-": hasil = num1 - num2; break;
  case "*": hasil = num1 * num2; break;
  case "/": hasil = num1 / num2; break;
  case "%": hasil = num1 % num2; break;
  case "**": hasil = num1 ** num2; break;
}

console.log(`\nHasil: ${num1} ${operator} ${num2} = ${hasil}`);

//Program 2
let hasil_akhir; 
let num3;
let jawaban1 = "Yes";
let jawaban2 = "No";
let a = prompt("Lanjut? (Yes, No): ");


if(a=jawaban1){
const num3 = getValidNumberInput("Masukkan angka : ");
const operator2 = getValidOperatorInput("Masukkan operator (+, -, *, /, %, **): ");

switch (operator2) {
  case "+": hasil_akhir = hasil + num3; break;
  case "-": hasil_akhir = hasil - num3; break;
  case "*": hasil_akhir = hasil * num3; break;
  case "/": hasil_akhir = hasil / num3; break;
  case "%": hasil_akhir = hasil % num3; break;
  case "**": hasil_akhir = hasil ** num3; break;
} 
console.log(`\nHasil: ${hasil} ${operator2} ${num3} = ${hasil_akhir}`);
}

else {
  console.log("Baik");
}

