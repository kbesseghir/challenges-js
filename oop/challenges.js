
class Car {
    constructor (name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
      }
    run() {
        return 'run'
         }
    stop(){return 'stop'}


}

let car1 = new Car('a1','a11',2000)
console.log(car1)
console.log(`Car One Name Is ${car1.n} And Model Is ${car1.m} And Price Is ${car1.p}`)
console.log(car1.run())



//###############################################

class Phone {
    constructor(name, serial, price) {
      this.name = name;
      this.serial = serial;
      this.price = price;
    }
  }
  
class Tablet extends Phone {
    constructor(name, serial, price,size) {
        super(name, serial, price);
        this.s=size || "unknown";
    }
    fullDetails(){
        return `${this.name} Serial is ${this.serial} And Size Is ${this.s}`
    }
}
  let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
  let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
  let TabletThree = new Tablet("LG", 250450650, 650);
  
  console.log(TabletOne.fullDetails());
  // iPad Serial is 100200300 And Size Is 12.9
  
  console.log(`${TabletTwo.fullDetails()}`);
  // Nokia Serial is 350450650 And Size Is 10.5
  
  console.log(`${TabletThree.fullDetails()}`);
  // LG Serial is 250450650 And Size Is Unknown



//###############################################

// Edit The Class
class User {
    
    constructor(username, card) {
      this.u = username;
      this.c = card;
    }
    showData() {
        return `Hello ${this.u} Your Credit Card Number Is ${this._formatCard(this._card)}`;
      }
  }
  
  // Do Not Edit Anything Below
  
  let userOne = new User("Osama", "1234-5678-1234-5678");
  let userTwo = new User("Ahmed", "1234567812345678");
  let userThree = new User("Ghareeb", 1234567812345678);
  
  console.log(userOne.showData);
  // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userTwo.showData);
  // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userThree.showData);
  // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userOne.c); // Prevent Accessing To Card Property Here
  // Undefined




//###############################################


  let myStr = "Elzero";
String.prototype.addLove = ()=> {return "Elzero love"} ;
  console.log(myStr.addLove());



//###############################################

// const myObj = {
//   username: "Elzero",
//   id: 100,
//   score: 1000,
//   country: "Egypt",
// };

// // Write Your Code Here

// myObj.score = 500;

// for (let prop in myObj) {
//   console.log(`${prop} => ${myObj[prop]}`);
// }

// console.log(myObj);
