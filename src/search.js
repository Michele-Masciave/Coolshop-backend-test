/**
 * Author: Michele Masciavè
 * Coolshop tech challenge
*/

'use strict';

const fs = require('fs'); 
const readline = require("readline")

// args[0] = filename
// args[1] = index
// args[2] = value
const args = process.argv.slice(2)

/**
 * Check some errors on parameters
 * - is the number of params just three?
 * - are the params all defined?
 * - does the csv really exist?
 * - is the index key a number?
 * - Ps. the controls complexity should be increased!
 *    - for instance checking if args[2] is really a date
 *      in that case I'd use the 'moment' library for handling
 *      the date's format
 *    - also, is the search by name/suraname case-sensitive?
 * @param {*} args arguments from command-line
 */
function checkArgs(args) {
  return  args.length === 3 &&
          args[0] !== undefined  && fs.existsSync(args[0]) && 
          args[1] !== undefined && !isNaN(parseInt(args[1])) && args[1] >= 0 && args[1] <= args.length &&
          args[2] !== undefined
}

/**
 * Return line to be printed
 * @param {*} filename path to csv file
 * @param {*} index index key to be used for looking for the line
 * @param {*} value value to be compared
 */
const searchRow = (filename, index, value) => {
  return new Promise((resolve, reject) => {
    const stream = fs.createReadStream(filename)
    const reader = readline.createInterface({ input: stream })
    // event on read csv-file
    reader.on("line", (row) => {
      // process line-by-line until match
      // - remove semicolon from date
      // - get an array of fields such as [id,name,surname,date]
      // - look for a match according to the index (hence, resolve)
      const fields = row.slice(0,-1).split(",")
      if(fields[index] === value) resolve(row)
    })
    // event on close csv-file
    // - if you are here, no match was found :-(
    reader.on('close', () => reject(undefined));
  });
}

// error checking on arguments
if(checkArgs(args)) {
  // look for the row to be printed
  searchRow(args[0], parseInt(args[1]), args[2])
  .then(line => console.log(line+"\n"))
  .catch(err => console.log('\nsorry, no match found.\n'))
} else {
  console.error('\nseems to be some problems on the parameters.\n');
}