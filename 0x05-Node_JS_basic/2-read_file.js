#!/usr/bin/node
const fs = require('fs');

function countStudents(fileName) {
  try {
    const data = fs.readFileSync(fileName, 'utf8');
    const lines = data.split('\n');
    const results = [];
    const titles = [];
    let count = 0;
    const fieldofstudy = {
      CS: {
        total: 0,
        list: [],
      },
      SWE: {
        total: 0,
        list: [],
      },
    };

    for (const line of lines) {
      const fields = line.split(',');

      if (count === 0) {
        // Process the header row to capture column titles
        for (const title of fields) {
          titles.push(title);
        }
      } else {
        // Process data rows here
        results.push(fields);
      }

      count += 1;
    }
    for (let i = 0; i < results.length; i += 1) {
      if (results[i][3] === 'SWE') {
        fieldofstudy.SWE.list.push(results[i][0]);
        fieldofstudy.SWE.total += 1;
      } else {
        fieldofstudy.CS.list.push(results[i][0]);
        fieldofstudy.CS.total += 1;
      }
    }
    console.log(`Number of students: ${results.length}`);
    console.log(`Number of students in CS: ${fieldofstudy.CS.total}. List: ${fieldofstudy.CS.list.join(', ')}`);
    console.log(`Number of students in SWE: ${fieldofstudy.SWE.total}. List: ${fieldofstudy.SWE.list.join(', ')}`);
  } catch (error) {
    // Throw an error or return an error message
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
