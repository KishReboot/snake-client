const net = require('net');
const { config, name } = require('./constants');
const connect = function() {

  const conn = net.createConnection(config);
  
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
  
  console.log('Server says: ', data);
  
});

  conn.on('connect', () => {

    conn.write(name);

  });

  return conn;

};

module.exports = { connect };