
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
