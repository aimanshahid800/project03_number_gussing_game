#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const random: number = Math.floor(Math.random() * 10 + 1);
let playAgain = " ";
do {
  let answer = await inquirer.prompt([
    {
      name: "numberGussed",
      type: "number",
      message: "Gusse the number between 1 to 10:",
    },
  ]);

  if (answer.numberGussed === random) {
    console.log(
      chalk.greenBright.italic("\t\t\tCongratulations! you WIN 😊🎉 !!!..")
    );
  } else {
    console.log(
      chalk.red(
        "\t\t\tOoooo 😮 You lose 😥 " +
          chalk.green("\n\t\t\t Better Luck Next Time 🙃 !!!..")
      )
    );
  }

  let playAgainAnswer = await inquirer.prompt([
    {
      name: "playAgain",
      type: "list",
      message: "Do you want to play again:",
      choices: ["Yes", "No"],
    },
  ]);

  playAgain = playAgainAnswer.playAgain;
} while (playAgain === "Yes");

console.log(chalk.magenta("\t\t\tTHANKYOU FOR PLAYING 🤗 !!!.."));
