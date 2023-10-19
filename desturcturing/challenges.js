let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here
[a, ,,,e]= myNumbers;
console.log(a * e); // 5


let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// Write Your Destructuring Assignment Here
[a,b,c,[d,e,[f,g,h]]]=mySkills
console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel