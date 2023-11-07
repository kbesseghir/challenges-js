function sayHello(theName, theGender) {
    if(theGender== "Female"){
        console.log(`hello Miss ${theName}`)
    }
    else if(theGender== "Male"){
        console.log(`hello Mr ${theName}`)
    }  
    else {        console.log(`hello ${theName}`)
}}
  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"

  //##############################################################

  function calculate(firstNum, secondNum, operation) {
 if  (secondNum == null) {
        console.log('error')
    }
else if(operation == 'add'){
    console.log(firstNum + secondNum);
}  
 else if(operation == 'subtract'){
    console.log(firstNum - secondNum);
}
else if(operation == 'multiply'){
    console.log(firstNum * secondNum);
}
else if(operation == null){
    console.log(firstNum + secondNum);
}

  }





  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600