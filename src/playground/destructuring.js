const person = {
  name: "Andrew",
  age: 26,
  location: {
    city: "New York",
    temp: 92
  }
};

const { name = "Anonymous", age } = person;
const { city, temp: temperature } = person.location;

console.log(`${city} is ${temperature} degrees.`);
