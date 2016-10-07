var chalk = require("chalk");

var message = "Hello " + chalk.red("World. \nThis is my " + chalk.bold.bgGreen("first attempt ") + chalk.white("at using Chalk."));
console.log(message);