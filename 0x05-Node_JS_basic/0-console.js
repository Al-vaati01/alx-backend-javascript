#!/usr/bin/node
/**
 * Displays a message on the STDOUT.
 * @param {String} msg The message to display.
 * @author Alvin
 */
function displayMessage(msg){
    process.stdout.write(msg);
}
module.exports = displayMessage;
