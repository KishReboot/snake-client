const stdin = require('process');
const { movement, msgs } = require('./constants');

let connection;

const setupInput = (conn) => {

  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => {
    handleUserInput(key);
  });
  return stdin;

};

const handleUserInput = function(key) {

  if (key === '\u0003') process.exit();

  if (movement[key]) connection.write(movement[key]);
  
  if (msgs[key]) connection.write(msgs[key]);
  
};

module.exports = { setupInput };