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

//##############################################################
function ageInTime(theAge) {

if ((theAge>10)&&(theAge<100)) {
    months = theAge*12
    weeks=theAge * 52
    days = theAge *365
    hours = days*24
    mins = hours*60
    sec=mins*60
    console.log(`${months} monthes  \n ${days} days \n ${hours} hours \n ${mins} mins \n ${sec} sec `)

  }
  else(console.log('Age Out Of Range'))
}
  
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months

