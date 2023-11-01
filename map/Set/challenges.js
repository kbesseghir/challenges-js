let setOfNumbers= new Set([10]);
setOfNumbers.add(20);
setOfNumbers.add(setOfNumbers.size);

console.log(setOfNumbers)



let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
let setE = [...new Set(myFriends)].sort();

console.log(setE)


let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
  };


  
 
  let myMap = new Map(Object.entries(myInfo));
  

  console.log(myMap);

  console.log(myMap.size);
  
 
  console.log(myMap.has('role'));
  