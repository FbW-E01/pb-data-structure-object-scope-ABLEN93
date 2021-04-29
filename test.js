const student = { 
    firstName: "John", 
    lastName: "Smith", 
    class: 12,
    info: function () {
        console.log(this.firstName + this.lastName + " is a student in a class" + this.class);
    }
};
  
student.info();


// 3

const person = {
    firstName: "John",
    lastName: "Smith",
    age: 41,
    job: "engineer",
    country: " France ",

    data: function () {
        console.log(this.firstName + this.lastName + " is a " + this.age + " years old " + this.job + " living in " + this.country);
    }
};
person.data();

// 4
let size = Object.keys(person).length;
console.log(size);


