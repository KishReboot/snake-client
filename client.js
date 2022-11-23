const net = require('net');

const PORT = '50541';
const IP = '165.227.47.243';

const connect = function () {

  const conn = net.createConnection({

    host: IP,
    port: PORT,

  });


  conn.setEncoding('utf8');
  conn.on('data', (data) => {

    console.log('Server says: ', data);
  
  });

  conn.on('connect', () => {

    console.log('Connected');
    conn.write("Name: Rus");

  });
  


  return conn;

};

module.exports = {
  connect, 
  
};