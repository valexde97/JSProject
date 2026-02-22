// function multByFactor(value, multiplier = 1) {
//   return value * multiplier;
// }

// // console.log(multByFactor(10));
// const multiply = function (value, multiplier = 2) {
//   let c;
//   c = value * multiplier;
//   console.log(c);
//   return c;
// };
// multiply(50);

// const arrowMultiply = (value, multiplier = 3) =>
//    value * multiplier;
// ;
// console.log(arrowMultiply(5));

// setTimeout(()=>{
//   console.log("Paused message");

// }, 1000)

// // console.log(Date());

// const newPost = (post, addedAt = Date()) =>({
//  ...post, addedAt})

//  const firstPost = {
//   id:1,
//   author: "Jora",
//  }
//  console.log(newPost(firstPost));

// const fnWithError = () => {
//   throw new Error("Some error");
// };
// try {
//   fnWithError();
// } catch (error) {
//   console.error(error);
//   console.log(error.message);
// }
// console.log("Continue...");

// let a;
// const b = 5;
// if (a > b) {
//   console.log("a is langer");
// }
// for (let i = 0; i++; i < 5) {
//  console.log(i);

// }

// const myArray = [1, true, "Jora"];
// const myArray2 = [1, true, "Jora"];
// myArray === myArray2;

// alert('Hello');

// const result = confirm('Are you here?')
// console.log(result);

// const answer = +prompt("Are you adult?", "18")
// console.log(answer+5);
// const answers = [];
// // answers[0] = prompt('What is your name?', "")
// // answers[1] = prompt('What is your surname?', "")
// // answers[2] = prompt('How old re you?', "")
// console.log(typeof(answers));

// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`);
// const user = "Ivan";
// alert(`Hello, ${user}`);

let incr = 10,
  decr = 10;
// incr++;
// decr--;
console.log(++incr);
console.log(--decr);

