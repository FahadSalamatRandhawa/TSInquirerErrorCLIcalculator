"use strict";
exports.__esModule = true;
var inquirer_1 = require("inquirer");
var calculate = [
    {
        type: 'number',
        name: 'firstNumber',
        message: 'Enter a number',
        "default": 'NaN',
        validate: function (number) { if (isNaN(number)) {
            return "Enter a valid number";
        } return true; }
    },
    {
        type: 'list',
        name: 'operator',
        message: 'Enter a operator',
        choices: ['/', '*', '+', '-', '%'],
        "default": '+'
    },
    {
        type: 'number',
        name: 'secondNumber',
        message: 'Enter a number',
        "default": 'NaN',
        validate: function (number) { if (isNaN(number)) {
            return "Enter a valid number";
        } return true; }
    }
];
inquirer_1["default"]
    .prompt(calculate)
    .then(function (answer) {
    switch (answer.operator) {
        case '*':
            console.log(answer.firstNumber * answer.secondNumber);
            break;
        case '+':
            console.log(answer.firstNumber + answer.secondNumber);
            break;
        case '-':
            console.log(answer.firstNumber - answer.secondNumber);
            break;
        case '/':
            console.log(answer.firstNumber / answer.secondNumber);
            break;
        case '%':
            console.log(answer.firstNumber % answer.secondNumber);
            break;
    }
});
