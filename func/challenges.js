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