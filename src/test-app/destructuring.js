// Object Destructuring

// const person = {
//     age: 25,
//     location: {
//         city: 'Dhaka',
//         temp: 90
//     } 
// }

// const { name = 'Anonymous', age } = person
// console.log(`${name} is ${age} years old.`); 

// const { city, temp: temperature } = person.location

// if ( city && temperature){
//     console.log(`It's ${temperature} degrees in ${city}.`);
// }

// const book = {
//     name: 'The Alchemist',
//     author: 'Paulo Coelho',
//     publisher: {
//         name: 'HarperCollins'
//     }
// };

// const { name, author } = book
// console.log(`${name}'s author is ${author}.`);
// const { name: publisherName = 'Unknown' } = book.publisher
// console.log(`Published by ${publisherName}.`);


// Array Destructuring

const address = ['420 town street', 'No Clue Dist', '420 Div', 'Lalaland'];
const [, district, division = 'Dhaka'] = address;

console.log(`You r in ${district} ${division}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [hotCoffee, , mSize] = item;

console.log(`${hotCoffee} medium is ${mSize}`);

