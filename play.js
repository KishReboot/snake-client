const { connect } = require('./client');
const { setupInput } = require('./input');

const connection = connect();

console.log('Connecting . . .');
connect();

setupInput(connection);

module.exports = { connect };
