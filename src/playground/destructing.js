// const person = {
//     name: 'wazza',
//     age: 49,
//     location: {
//         city: 'toukley',
//         temp: 35
//     }
    
// };

// const {name = 'Anoymous', age} = person;

// console.log(`${name} is ${age}.`);

// const { city, temp: temperature} = person.location;
// console.log(`It's ${temperature} in ${city}`);


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
// };

// const { name: publisherName = 'self-published'} = book.publisher;
// console.log(publisherName);


//
// Array destructing
//

const item = ['Coffee (icecoffee)', '$2.00', '$2.90', '$2.75'];
const [coffee,,price] = item;
console.log(`A medium ${coffee} cost ${price}.`);
