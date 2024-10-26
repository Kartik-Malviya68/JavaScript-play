const member = {
    name: "kishan",
    gender: "male",
    age: 20,
    fullName: function (lastName) {
        return this.name + " " + lastName;
    },
    greet: function() {
        return `Hello, my name is ${this.name}.`;
    }
};

console.log(member.fullName("malviya")); 
console.log(member.greet()); 
