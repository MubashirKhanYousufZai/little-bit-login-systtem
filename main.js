import inquirer from "inquirer";
console.log("Welcome to our website");
let passcode = ["1234", "5678", "9012", "3456"];
let login = await inquirer.prompt([
    {
        name: "id",
        type: "input",
        message: "Enter your id",
    }
]);
let password = await inquirer.prompt([
    {
        name: "password",
        type: "password",
        message: "Enter your account password",
    }
]);
setTimeout(() => {
    console.log("Welcome");
}, 10000);
setTimeout(() => {
    console.log("Incorrect password");
}, 10000);
