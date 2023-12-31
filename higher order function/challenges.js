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

//################################

function aVeryBigSum(ar) {
   let sum = BigInt(0); // Initialize sum as a BigInt

    for (let i = 0; i < ar.length; i++) {
        sum += BigInt(ar[i]); // Add each element to the sum as a BigInt
    }

    return sum;
}//################################

function diagonalDifference(arr) {
   let primarySum = 0;
   let secondarySum = 0;

   for (let i = 0; i < arr.length; i++) {
       primarySum += arr[i][i];
       secondarySum += arr[i][arr.length - 1 - i];
   }

   return Math.abs(primarySum - secondarySum);

}