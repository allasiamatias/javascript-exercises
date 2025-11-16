const getAge = function (birth, death){
    if(!death){
        death = new Date().getFullYear()
    }
    return death - birth
}

const findTheOldest = function(arr) {
    return arr.reduce((acc, va) => {
        const oldestAge = getAge(acc.yearOfBirth, acc.yearOfDeath)
        const currentAge = getAge(va.yearOfBirth, va.yearOfDeath)
    return oldestAge < currentAge ? va : acc
    })
};


const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

const people2 = [
      {
        name: "Carly",
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

        const people3 = [
      {
        name: "Carly",
        yearOfBirth: 1066,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
console.log(findTheOldest(people).name)
console.log(findTheOldest(people2).name)
console.log(findTheOldest(people3).name)

// Do not edit below this line
module.exports = findTheOldest;
