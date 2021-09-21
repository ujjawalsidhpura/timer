const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter number between 1 to 9 to set timer OR b for instant beep, and then CTRL+C to exit :', (answer) => {

  let counter = answer * 1000;

  if (counter === 'b') {
    process.stdout.write('\x07');
  }

  setTimeout(() => {
    process.stdout.write('\x07');
  }, counter)

  // To EXIT, we can use either first option or second

  //Option 1
  process.on('SIGINT', function () {
    rl.close();
  });

  //option 2
  // if (answer.key === 'c' && answer.key.name === key.ctrl) {
  //   rl.close();
  // }
});
