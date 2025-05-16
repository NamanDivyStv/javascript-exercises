const findTheOldest = function (people) {
  let oldest,
    min = 0,
    i;
  for (i = 0; i < people.length; i++) {
    if (people[i].yearOfDeath == undefined) {
      if (2025 - people[i].yearOfBirth > min) {
        min = 2025 - people[i].yearOfBirth;
        oldest = people[i]["name"];
      }
    } else {
      if (people[i].yearOfDeath - people[i].yearOfBirth > min) {
        min = people[i].yearOfDeath - people[i].yearOfBirth;
        oldest = people[i]["name"];
      }
    }
  }
  return (oldest);
};

// Do not edit below this line
module.exports = findTheOldest;
