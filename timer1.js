const input = process.argv.slice(2)
const inputSecond = input.map((e) => {
  return e * 1000;
})

for (let i = 0; i < inputSecond.length; i++) {

  setTimeout(() => {
    process.stdout.write('\x07');
  }, inputSecond[i])
}

