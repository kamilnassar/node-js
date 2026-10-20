//כמיל נצאר
// מרים נבראוי
const num = 6;

//checking  conditions
const answer1 = +(num % 2 == 0 || num % 3 == 0 || num % 5 == 0);
const answer2 =
  +(num % 2 == 0 && num % 3 == 0) ||
  (num % 3 == 0 && num % 5 == 0)(num % 2 == 0 && num % 5 == 0) + answer1;
const answer3 = +(num % 2 == 0 && num % 3 == 0 && num % 5 == 0) + answer2;

// to print the output
console.log(answer3);
