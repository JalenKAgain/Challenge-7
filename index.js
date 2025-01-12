import inquirer from "inquirer";


inquirer
    .prompt([

        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?",
        },
        {
            type: "input",
            name: "project",
            message: "What is your project name?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
        },
        {
            type: "input",
            name: "license",
            message: "What kind of license should your project have?",
            choices:['WTFPL', 'LGPL', 'ISC', 'MIT', 'None'],

        }
    ])
    .then((answers) => {
        writeToFile("README.md")

    })




function writeToFile(filename, data) {
    FileSystem.writeFile(filename, data, (err) =>
        err ? console.error(err) : console.log(`README.md design successful!`)
);
        }

        function init(){
            inquirer.prompt(questions).then((answers) => {
                const markdown = generateMarkdown(answers);
                writeToFile(`README.md`, markdown);
            });




        }
        init();