/* const person = {
  name: "Aldair",
  age: 23,
  location: {
    city: "Guadalajara",
    temp: 20
  }
};

const { name: firstName = 'Anonymus', age } = person;
console.log(`${firstName} is ${age}.`);

const {temp: temperature, city} = person.location;
if (city && temperature) 
{
  console.log(`It's ${temperature} in ${city}.`);
}
 */

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

// const address = ['Isla Curazao 2409', 'Guadalajara', 'Jalisco', '44920'];
// const [, city, state = 'Unknown',] = address; 
// console.log(`You are in ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [product, , cost,]  = item;
console.log(`A medium ${product} costs ${cost}`);