#!/usr/bin/node

function displayMessage() {
    process.stdout.write('Hello NodeJS!');
}

module.exports = {displayMessage}