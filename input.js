let connection;
const { INPUTS } = require('./constants');

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    console.log('Exiting Game');
    process.exit();
  }
  if (INPUTS[key]){
    connection.write(INPUTS[key]);
  }
};

module.exports = {
  setupInput
}