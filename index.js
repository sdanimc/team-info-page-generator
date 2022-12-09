const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./lib/employee');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');

const teamMembers = [];
const mgtQuestions = [
    {
        name: 'name',
        message: 'What is the name of the Team Manager?',
        type: 'input'
    },
    {
        name: 'id',
        message: 'What is the employee ID number of the Team Manager?',
        type: 'input'
    },
    {
        name: 'email',
        message: 'Email address for the Team Manager:',
        type: 'input'
    },
    {
        name: 'phone',
        message: 'What is the office phone number for the Team Manager?',
        type: 'input'
    }
]
const engineerQs = [
    {
        name: 'name',
        message: 'What is the name of this Engineer?',
        type: 'input'
    },
    {
        name: 'id',
        message: 'What is the employee ID number of this Engineer?',
        type: 'input'
    },
    {
        name: 'email',
        message: 'Email address for this Engineer:',
        type: 'input'
    },
    {
        name: 'github',
        message: 'What is the github username of this Engineer?',
        type: 'input'
    }
]
const internQs = [
    {
        name: 'name',
        message: 'What is the name of this Intern?',
        type: 'input'
    },
    {
        name: 'id',
        message: 'What is the employee ID number of this Intern?',
        type: 'input'
    },
    {
        name: 'email',
        message: 'Email address for this Intern:',
        type: 'input'
    },
    {
        name: 'school',
        message: 'What school does this intern attend?',
        type: 'input'
    }
]

function addMemberQ() {
    return inquirer.prompt([{
        name: 'continue',
        message: 'Would you like to add a member to this team?',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'Team is Complete']
    }])
        .then((data) => {
            let userChoice = data.continue;
            if (userChoice == 'Add Engineer') {
                addEngineer();
            } else if (userChoice == 'Add Intern') {
                addIntern();
            } else {
                console.log("done!");
                //generateHTML?
            }
        })
};
function init() {
    inquirer.prompt(mgtQuestions)
        .then((answers) => {
            const addManager = new manager(
                answers.name,
                answers.id,
                answers.email,
                answers.phone
            );
            teamMembers.push(addManager);
            console.log(teamMembers);
            addMemberQ();
        })
}
function addEngineer() {
    inquirer.prompt(engineerQs)
        .then((answers) => {
            const engineerAdd = new engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.github
            );
            teamMembers.push(engineerAdd);
            console.log(teamMembers);
            addMemberQ();
        })
}
function addIntern() {
    inquirer.prompt(internQs)
        .then((answers) => {
            const internAdd = new intern(
                answers.name,
                answers.id,
                answers.email,
                answers.school
            );
            teamMembers.push(internAdd);
            console.log(teamMembers);
            addMemberQ();
        })
}
init();
