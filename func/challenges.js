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


  //##############################################################



  function createSelectBox(startYear, endYear) {
   for (var i = startYear;i < endYear+1 ; i++) {
 
 var newElement = document.createElement('option');

 // 2. Set attributes (optional)
 newElement.setAttribute('value', i);

 // 3. Insert content (optional)
 newElement.innerHTML = `<p>${i}</p>`;

 // 4. Append the new element to the existing content
 var existingContent = document.getElementById('elem');
 existingContent.appendChild(newElement);
   }

  }
  createSelectBox(2000, 2021);
  //####


 function multiply(...num){
   var result =1
 
    for (var i=0; i<num.length; i++){
      if (typeof num[i] === 'number'){
        intg =parseInt(num[i])
        result *=intg
        
    }
  }
  console.log(result)

 }
  multiply(10, 20); // 200
  multiply( 'a',10.6, 30); // 300
  multiply(100.5, 10); // 1000




  //$$$$$$$$$$$$$$$$$$$$$$


  function checkStatus(a, b, c) {
    tab=[a,b,c];
    for(let i=0;i<tab.length;i++){
      if (typeof tab[i]==='string'){
       var str=tab[i]
      }
      else if (typeof tab[i]==='number'){
       var num=tab[i];
      }
      else if (typeof tab[i]==='boolean'){
        var boo = arguments[i] ? 'Available For Hire' : 'Not Available For Hire';    }
        
      }
      console.log(`hello ${str},ur age is ${num},u are ${boo}`)
  }
  console.log(`hi`)

  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Helo Osama, Your Age Is 38, You Are Not Available For Hir


  ////////////////////////////////////////////////////////////////////////

  function getDetails(zName, zAge, zCountry) {

   var firstname,lastName,age,country,parts
   

    function namePattern(zName) {
      parts = zName.split(' ');
       firstname = parts[0];
       lastName = parts[parts.length - 1][0];
      // Write Your Code Here
      // Osama Mohamed => Osama M.
      // Ahmed ali => Ahmed A.
    }
    function ageWithMessage(zAge) {
       age = zAge.match(/\d+/);
      }

      // Write Your Code Here
      // 38 Is My Age => Your Age Is 38
      // 32 Is The Age => Your Age Is 32
    
    function countryTwoLetters(zCountry) {
      // Write Your Code Here
       country =zCountry.slice(0,2)
      // Egypt => You Live In EG
      // Syria => You Live In SY
    }
    function fullDetails() {
      countryTwoLetters(zCountry)
      ageWithMessage(zAge)
      namePattern(zName) 


      console.log(`ur name is ${firstname} ${lastName},ur age is ${age},u live in ${country}`);
    }
    return fullDetails(); // Do Not Edit This
  }
  
getDetails("Osama Mohamed", "38 Is My Age", "Egypt");
  // Hello Osama M., Your Age Is 38, You Live In EG
  
getDetails("Ahmed ali", "32 Is The Age", "Syria");
  // Hello Ahmed A., Your Age Is 32, You Live In SY