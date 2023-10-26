let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
total =[]
 mix.map(function(elem)  {
if (typeof elem === "string") {
    return total.push(elem)

} 
})
 let result = total.reduce(function(acc,curr){
    return acc.concat(curr)
 })

console.log(total)
console.log(result)




let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

 result = numsAndStrings.filter(function(elem){
   return typeof elem !== "string"
 }).map(function(elem){
    return -elem
 });
 console.log(result)

// [-1, -10, 10, 20, -5, -3]



let nums = [2, 12, 11, 5, 10, 1, 99];
result = nums.reduce(function (acc,curr){
   return  (curr % 2 ==0)? acc*curr : acc+curr
})
console.log(result)
