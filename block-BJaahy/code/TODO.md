# More about class

- Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.

class Square{
    constructor(side){
        this.width = side;
        this.height = side;
    }
}

- Add a method name `description` that will alert a message saying `The square is ${width} x ${height}`

class Square{
    constructor(side){
        this.width = side;
        this.height = side;
    }
    description(){
        return `The square is ${this.width} x ${this.height}`
    }
}

- Create a method inside the class named `calcArea` that will return the area of the square.

class Square{
    constructor(side){
        this.width = side;
        this.height = side;
    }
    description(){
        return `The square is ${this.width} x ${this.height}`
    }
    area(){
        return this.width * this.height;
    }
}
- Create a `area` getter method using which we can get the area of the square.
class Square{
    constructor(side){
        this.width = side;
        this.height = side;
    }
    description(){
        return `The square is ${this.width} x ${this.height}`
    }
    get area(){
        return this.width * this.height;
    }
}
- Create a `area` setter method that will accept the area of the square. Based on the value of area it will set the value of `width` and `height`. If the passed value is not the area of the square alert say `Not a valid input`
class Square{
    constructor(side){
        this.width = side;
        this.height = side;
    }
    description(){
        return `The square is ${this.width} x ${this.height}`
    }
    
    set area(value){
        let side = Math.sqrt(value)
        this.width = side;
        this.height = side;
    }
    get area(){
        return this.width * this.height;
    }
}
- Create a static method named `isEqual` which accepts two `square` object with `width` and `height` property. If the area of both square is same it will return `true` or `false`.
class Square{
    constructor(side){
        this.width = side;
        this.height = side;
        this.numberOfTimes = 0;
    }
    description(){
        return `The square is ${this.width} x ${this.height}`
    }
    get area(){
        return this.width * this.height;
    }
    set area(value){
        let side = Math.sqrt(value)
        this.width = side;
        this.height = side;
    }
    static isEqual(a,b){
        return (a.width*a.height) === (b.width*b.height)
    }
    
}
- Create another property named `numberOfTimes` that will hold the value of number of times the area property is accessed from the object. The values will initialize to `0`. The area property can't be accessed more than 4 times. If it crosses 4 times alert message `Upper Limit Reached`
class Square{
    constructor(side){
        this.width = side;
        this.height = side;
        this.numberOfTimes = 0;
    }
    description(){
        return `The square is ${this.width} x ${this.height}`
    }
    get area(){
        this.numberOfTimes++;
        if(this.numberOfTimes>=4){
            alert("maximum limit reached")
        }else{
            return this.width * this.height;
        }
    }
    set area(value){
        let side = Math.sqrt(value)
        this.width = side;
        this.height = side;
    }
    static isEqual(a,b){
        return (a.width*a.height) === (b.width*b.height)
    }
}
- Create two instance of the `Square` class
let squareOne = new Square(40);
let squareTwo = new Square(20);

- Check the `area` getter method on both square. Check the `area` property on one square more than 4 times.
squareOne.area;

- Check the `isEqual` method and pass the two instance you created above.
Square.isEqual(squareOne,squareTwo);

## User Class

- Create a `User` class that accepts `firstName` and `lastName` property

class User{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

- Create a getter method named `fullName` that will return the full name of the person.

class User{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set fullname(value){
        if(value.length>5){
            let arr = value.split(" ");
            this.firstName = arr[0];
            this.lastName = arr[1];
        }else{
            alert(`Full name should be more than 5 characters`);
        }
        
    }
    get fullname(){
        return `${this.firstName} ${this.lastName}`;
    }
}

- Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`

class User{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    set fullname(value){
        if(value.length>5){
            let arr = value.split(" ");
            this.firstName = arr[0];
            this.lastName = arr[1];
        }else{
            alert(`Full name should be more than 5 characters`);
        }
    }
    get fullname(){
        return `${this.firstName} ${this.lastName}`;
    }
}

- Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.
class User{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set fullname(value){
        if(value.length>5){
            let arr = value.split(" ");
            this.firstName = arr[0];
            this.lastName = arr[1];
        }else{
            alert(`Full name should be more than 5 characters`);
        }
        
    }
    get fullname(){

        return `${this.firstName} ${this.lastName}`;
    }
    nameContains(str){
        return `${this.firstName} ${this.lastName}`.includes(str);
    }
}

- Create two instance of the `User` class
let user1 = new User("sarah","williams");
let user2 = new User("john","doe");

- Check by using the `fullName` setter method with name bigger than 5 characters.

user1.fullname= "jayden rebelo";
user2.fullname= "reena mendonsa";

- Check by using the `fullName` setter method with name less than 5 characters.
user1.fullname= "xyz";
user2.fullname= "abc";

- Check the `fullName` using getter
user1.fullname;
user2.fullname;
- Check the `nameContains` method
user1.nameContains("sar");//true
user2.nameContains("jo");//true