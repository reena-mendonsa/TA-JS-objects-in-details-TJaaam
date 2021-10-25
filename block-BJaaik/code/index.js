class Person{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat(){
        console.log("Eat Healthy");
    }
    sleep(){
        console.log("Sleeping well");
    }
    walk(){
        console.log("Walk everyday");
    }
}

class Player extends Person{
    constructor(name,age,gender,sportsName){
        super(name,age,gender);
        this.sportsName = sportsName;
    }
    play(){
        console.log("Play to stay fit");
    }
}
class Teacher extends Person{
    constructor(name,age,gender,instituteName){
        super(name,age,gender);
        this.instituteName = instituteName;
    }
    teach(){
        console.log("Teaching");
    }
} 
class Artist extends Person{
    constructor(name,age,gender,kind){
        super(name,age,gender);
        this.kind = kind;
    }
    createArt(){
        console.log("Art is relaxing");
    }
}
class Cricketer extends Player{
    constructor(name,age,gender,sportsName,teamName){
        super(name,age,gender,sportsName);
    }
    playCricket(){
        console.log("Playing cricket");
    }
}

let cricketPlayer1 = new Cricketer("dhoni",28,"male","cricket","india");
cricketPlayer1;