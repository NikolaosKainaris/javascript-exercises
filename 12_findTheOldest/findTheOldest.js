const age = function(person) {
    if (person.yearOfDeath === undefined) person.yearOfDeath = new Date().getFullYear()
    return person.yearOfDeath - person.yearOfBirth
}
const findTheOldest = function(people) {
    return people.sort((p1, p2) => age(p1) < age(p2) ? 1 : -1)[0]
};

// Do not edit below this line
module.exports = findTheOldest;
