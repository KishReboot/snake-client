const { stdin } = require('process');

let connection;



const msgs = {
  
  0: 'Say: Hello!!',
  1: 'Say: Im going to eat all the food!!',
  2: 'Say: selling food offer 11111111111111',
  3: 'Say: All your base are belong to us',
  4: 'Say: Welcome to the dangerzone!',


};

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

  if (key === '\u0003') {

    process.exit();

  }

  if (key === 'w') {

    connection.write('Move: up');

  }

  if (key === 's') {

    connection.write('Move: down');

  }

  if (key === 'a') {

    connection.write('Move: left');

  }

  if (key === 'd') {

    connection.write('Move: right');

  }

  if (key === '1') {

    connection.write(msgs[0]);

  }

  if (key === '2') {

    connection.write(msgs[1]);

  }

  if (key === '3') {

    connection.write(msgs[2]);

  }

  if (key === '4') {

    connection.write(msgs[3]);
  
  }

  if (key === '5') {

    connection.write(msgs[4]);
    
  }

};

module.exports = { setupInput };