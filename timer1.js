//make a timer that takes command line args to cause our function to beep at set intervals
//process.stdout.write('\x07'); is used to made node beep
//of no number is priovded in the command line, no beep
//if number is negative, skip/ignore it
//is number is NaN, ignore/skip
//use process.argv to pass args from command line

//take numbers from command line and store them in a variable. remember to use slice(2) to take out node and timer1.js from your cmd line
//instead of an if statement, you can filter right in the numbers variable! use .filter() to input your filters

let numbers = process.argv.slice(2).filter(num => !isNaN(num) && num > 0);//if the number is no NaN and its not negative, keep running the code
//use forEach to run the function for each num of the numbers variable
numbers.forEach(num => {
  //declare a variable for our timer, but multiply it by 1000 to get ms
  let timer = num * 1000;
  setTimeout(() => {
    process.stdout.write('\x07'); //beep
  }, timer); //use the timer variable to beep at the right times
});
