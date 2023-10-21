let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here
[a, ,,,e]= myNumbers;
console.log(a * e); // 5


let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// Write Your Destructuring Assignment Here
[a,b,c,[d,e,[f,g,h]]]=mySkills
console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel


let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here
let arrTotal = arr1.concat( arr2,arr3);
[c,,,b,,,,a]=arrTotal
console.log(arrTotal)
console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed