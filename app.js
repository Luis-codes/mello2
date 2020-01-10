// console.log('Hello World!');
// var language = 'JavaScript';
// var status = 'Awesome';
// var ourThoughts = language + ' is ' + status;

// console.log(ourThoughts);	

// var greeting = 'Hello';
// greeting += ' World!'; 

// console.log('greeting:', greeting);

// var capitalGreet = greeting.toUpperCase();
// var lowerCaseGreet = greeting.toLowerCase();

// console.log('capitalGreet:', capitalGreet);
// console.log('lowerCaseGreet:', lowerCaseGreet);

// var sentence = 'the quick brown fox jumped over the lazy dog';
// var words = sentence.split(' ');
// console.log(words);

// var firstName = 'Brendan';
// var lastName = 'Eich';

// console.log('firstName:', firstName);
// console.log('lastName:', lastName);

// var fullName = `
// 	Full Name

// 	--- 

// 	First Name: ${firstName}
// 	Last Name: ${lastName}`;

// 	console.log(fullName);

// var price = 23.09;
// var tax = 0.07
// var total = price * (1 + tax);

// console.log(total);

// var age = 11;
// age++;
// console.log(age);
// age--;
// console.log(age);

// Undefined is implicit emptiness
// noVal is never given a value, so it is undefined
// var noVal;
// console.log(noVal); // undefined

// Null is explicit emptiness
// Values must be assigned null
// var nullVal = null;
// console.log(nullVal); // null

// var favoriteThings = ['dogs', 'nature', 'friends'];
// var firstThing = favoriteThings[0];
// var secondThing = favoriteThings[1];
// var thirdThing = favoriteThings[2];

// console.log(`I like ${firstThing}, ${secondThing}, and ${thirdThing}`);

// var car = {
// 	make: 'Tesla',
//	model: 'Model 3',
//	color: 'red'
// };

// var key = 'color';

// Values are most commonly accessed using dot notation
// console.log(`Car Make: ${car.make}`); // Tesla

// Values can also be accessed using bracket notation
// similar to ruby hashes
// console.log(`Car Model: ${car['model']}`); // Model 3

// Bracket notation is useful for dynamically accessing properties using a variable string
// console.log(`Car Color: ${car[key]}`); // Car Color: red
// objects in JavaScript can have keys and values assigned dynamically after creation
// car.engineSound = 'Vroom!!!';

// console.log(`Car Engine Sound: ${car.engineSound}`); // Car Engine Sound: "Vroom!!!"

// var willLearnJavaScript = false;
// willLearnJavaScript = !willLearnJavaScript;

// console.log(willLearnJavaScript);

// var areSame = 'Hello World!' === 'Hello World!';
// console.log('areSame:', areSame);

// var areSame = 10 == '10';
// console.log('areSame:', areSame);

// var areSame = 10 === '10';
// console.log('areSame:', areSame);

// var areSame1 = false == 0;
// console.log('false == 0:', areSame1);

// var areSame2 = false == '';
// console.log('false == "":', areSame2);

// var areSame3 = true == '1';
// console.log('true == "1":', areSame3);

// var areSame4 = null == undefined;
// console.log('null == undefined', areSame4);

// var areSame1 = 10 !== 10;
// console.log('areSame1:', areSame1);

// var areSame2 = 6 !== '6';
// console.log('areSame2:', areSame2);

// var shouldExecute = true;
// if (shouldExecute === true) {
// 	console.log('Hazaaaa! This code ran!');
// }

// var num = 9;

// if (num > 10) {
// 	console.log('num is more than 10!');
// } else if (num < 8) {
// 	console.log('num is less than 8!');
// } else {
// 	console.log('num is somewhere between 8 and 10!');
// }

var num = 6;

// BOTH conditionals must be true
// if (num > 3 && num < 10) {
// 	console.log('The number is larger than 3 AND smaller than 10');
// }
// EITHER condition must be true
if (num === 6 || num > 10) {
	console.log('The number is equal to six or larger than 10');
}











