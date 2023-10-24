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