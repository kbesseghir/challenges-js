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



const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
  };
  
  // Write Your Destructuring Assignment Here
  ({age:a,working:w}=member)
  console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
  // My Age Is 30 And Iam Not Working
  ({country:c}=member)

  console.log(`I Live in ${c}`);
  // I Live in Egypt
  ({hobbies:[h1,,h3]}=member)

  console.log(`My Hobbies: ${h1} And ${h3}`);
  // My Hobbies: Reading And Programming


  const game = {
    title: "YS",
    developer: "Falcom",
    releases: {
      "Oath In Felghana": ["USA", "Japan"],
      "Ark Of Napishtim": {
        US: "20 USD",
        JAP: "10 USD",
      },
      Origin: "30 USD",
    },
  };
  
  // Write Your Destructuring Assignment/s Here
  ({title:t}=game)
  console.log(`My Favourite Games Style Is ${t} Style`);
  // My Favourite Games Style Is YS Style
  ({developer:d}=game)

 
  const or = game.releases.Origin;
  console.log(`And I Love ${d} Games`);
  // And I Love Falcom Games

  

  // Ark Of Napishtim Price in Japan Is 10 USD
  console.log(`Origin Price Is ${or}`);
  // Origin Price Is 30 USD