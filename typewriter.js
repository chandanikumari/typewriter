
const sentence = "hello there from lighthouse labs";
const statement = sentence + `\n`;
let time = 0;

for (const char of statement) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, time); // <= 1s delay to make it noticeable. Can dial it down later.
  time += 50;
}
