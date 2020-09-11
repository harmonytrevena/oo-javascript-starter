/*
Create a class called Person which accepts the name of a person as a string, and his/her age as a number.

The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". So for example, if John is 19 years old then the function describe of his object will return "John, 19 years old".
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        console.log(`My name is ${this.name}, and I am ${this.age} years old.`);
    }
}

const harmony = new Person("Harmony", 27)

harmony.describe()

/*
Create an object called Teacher derived from the Person class, and implement a method called teach which receives a string called subject, and prints out:
*/

class Teacher extends Person {
    static instruction() {
        console.log(`How much teach would a teacher teach if a teacher could teach teach?`);
    }
    teach(subject) {
        console.log(`${this.name} teaches ${subject}`);
    }
}

const eric = new Teacher("Eric")

eric.teach("everything programming related!")
Teacher.instruction()