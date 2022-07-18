console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = 'Sunaira'
console.log(`The driver's name is ${hacker1}`)
let hacker2 = 'Dougy'
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters."`)
}
else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names ${hacker2.length}characters!.`)
}


// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and [in capitals]
let str1 = ""
for (let i = 0; i < hacker1.length; i++){
  str1 += `${hacker1[i].toUpperCase()} `
}
console.log(str1)

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let str2 = ""
for (let i = hacker2.length - 1; i >= 0; i--){
  str2 += `${hacker2[i]}`
}
console.log(str2)

// 3.3


// Solution 1 using google
if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The driver's name goes first.`)
}
else if (hacker1.localeCompare(hacker2) === 1)
{
  console.log(`Yo, the navigator goes first definitely.`)
}
else {
  console.log(`What?! You both have the same name?`)
}

// Solution 2 using conditionnals

if(hacker1 < hacker2){
  console.log("The driver's name goes first.");
}else if(hacker1 > hacker2){
  console.log("Yo, the navigator goes first definitely.");
}else{
  console.log('What?! You both have the same name?');
}

/* #### Bonus 1:
Go to [lorem ipsum generator](http://www.lipsum.com/) and:
- Generate 3 paragraphs. Store the text in a variable type of string.
a. Make your program count the number of words in the string.
b. Make your program count the number of times the Latin word [`et`](https://en.wiktionary.org/wiki/et#Latin) appears.
*/

// a.

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae bibendum felis. Sed porta eros mauris, non pharetra dolor accumsan laoreet. Nullam nec ullamcorper diam, at lacinia arcu. Cras pellentesque volutpat hendrerit. Praesent tempus malesuada iaculis. Cras ac velit varius, volutpat dui sit amet, gravida leo. Sed porta neque ac convallis fermentum. Phasellus vel varius nunc. Integer suscipit augue vitae eros condimentum feugiat. "

// my original code

let count = 0
for (let j = 0; j < text.length; j++){
  if (j == " "){
    count+=1;
  }
}
console.log(count) // it returns 1... my logic there was : iterate as long as the length of text is and count +1 when j encouters a blank space because that would be a word. but i think i'm missing something.


// my code corrected by suraina

let count = 0
for (let j = 0; j < text.length; j++){
  if (text[j] === " "){
    count+=1;
  }
}
console.log(count) // i want to make sure to understand where i did wrong, so could a TA explain to me in plain english what is the difference between if (text[j] === " ") and if (j === " ") ? thank you!

/* b.
let count2 = 0
for (let a = 0; a < text.length; a++){
  const char1 = text.length[a];
  const char2 = text.length[a+1]
  if (char1 === "e" && char2 === "t"){
    count2++;
  };
}
console.log(count) // it also returns 1 xD i think it's the char parts i've got wrong

*/