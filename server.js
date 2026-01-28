let friends = [
    {
        firstName: 'Harry',
        age: 11,
        isWizard: true,
        friends: ['Ron', 'Hedwig', 'Hermione'],
        introduce: function() {
            console.log(`Greetings, my name is ${this.firstName}.`);
        }
    },
    {
        firstName: 'Ron',
        age: 11,
        isWizard: true,
        friends: ['Harry', 'Hedwig', 'Hermione'],
        introduce: function() {
            console.log(`Greetings, my name is ${this.firstName}.`);
        }
    },
    {
        firstName: 'Hedwig',
        age: 'unknown',
        isWizard: false,
        friends: ['Ron', 'Harry', 'Hermione'],
        introduce: function() {
            console.log(`${This.firstName} say hoot-hoot.`);
        }
    },
    {
        firstName: 'Hermione',
        age: 11,
        isWizard: true,
        friends: ['Ron', 'Hedwig', 'Harry'],
        introduce: function() {
            console.log(`Greetings, my name is ${this.firstName}.`);
        }
    }
]

//filter()
let students = friends.filter(friends => {
    if(friends.isWizard) {
        return friends;
    }
});

//map()
let studentList = students.map(student => {
    return student.firstName;
})

//sort()
studentList.sort((a, b) => {return a.localeCompare(b)});

console.log(studentList);c