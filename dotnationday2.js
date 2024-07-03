// // MORNING
// let weather = "dull"
// if (weather == "sunny") {
//       do this
//console.log("Well I better wear my sunglasses")
// }
// else if (weather == "rainy") {
//      do this
//console.log("I best not forget a coat")
// }
// else {
//      if nothing else matched do this
//console.log("I best wrap up")
// }
//      === is strictly equivalent to including the date type. == id equivalent. != Not Equal !== Not strictly equal.
// let place = "Manchester";
// let weather = "Cloudy";

// if (place == "Manchester" && weather == "sunny") {
//     console.log("Check again");
//     } else if (place == "Manchester" && weather == "Rain") {
//     console.log("Obviously")
//     } else if (place == "Manchester" && weather == "Cloudy")
//     console.log("I best bring a jacket") 
//     else {
//     console.log("What is going on? It isn't raining?")
//     }
// let day = "saturday"
//     if (day == "saturday" || day == "sunday") 
//     { console.log ("It's the weekend!")
//     } else {
//     console.log ("Stupid weekday!")
//     }
//      ACTIVTY 1
// let age = 71
// if (age < 18) {
//     console.log ("Too young")
// }
// else {
//     console.log("Old enough")
// }

//      ACTIVITY 1 (STRETCH)
// let age = "50"
// let country = "UK"
// if (age < 18 && country == "UK") {
//     console.log ("I'm sorry, but you are too young")
// }
// else if (age >=18 && country == "UK"){
//     console.log("What drink would you like")
// }
// else {
//     console.log("Wrong country")
// }

//      ACTIVITY 2
// let topping = "pepperoni"
// switch (topping) {
//     case "spicy beef":
//     case "pepperoni":
//     case "salami":
//     console.log("I enjoy these toppings on my pizza.");
//     break;
//     case "extra cheese":
//     case "BBQ Base":
//     console.log("I don't mind these pizza toppings");
//     break;
//     case "pineapple":
//     console.log("Does not belong on pizza");
//     break;
//     case "Olives":
//     case "Artichokes":
//     console.log ("I hate these toppings on pizza");
//     default:
//     console.log ("the topping isn't memorable")
// }
//     ACTIVITY 3
// let password = "everton8"
// if (password .length >=8)  {
//     console.log ("Accepted")
// }
// else {
//     console.log ("Password is too short.")
// }

//      ACTIVITY 4

// let num = 60
// if(num % 3 === 0 & num % 5 === 0) {
//     console.log("Fizzbuzz")
// }
// else if(num % 3 === 0) {
//     console.log("Fizz")
// }
// else if(num % 5 === 0) {
//     console.log("Buzz")
// }
// else {
//     console.log(num)
// }

//      ACTIVITY 5
// let num = 1010101
// let numStr = num.toString()
// let reversedstring = numStr.split('').reverse().join('');
// if (numStr === reversedstring) {
//     console.log(` ${num} is a palindrome. `)
// }
// else {
//     console.log(` ${num} is not a palindrome.`)
// }

//      ACTIVITY 6

// let time = 17;
// let placeOfWork = "At my desk";
// let townOfHome = "Home";
 
// if (time >= 0 && time < 6) {
//     console.log(`At ${time}:00, I'm sleeping. Get lost!`);
// } else if (time >= 6 && time < 8) {
//     console.log(`At ${time}:00, I'm at ${townOfHome}.`);
// } else if (time >= 8 && time < 9) {
//     console.log(`At ${time}:00, I'm en route to ork.`);
// } else if (time >= 9 && time < 17) {
//     console.log(`At ${time}:00, I'm at ${placeOfWork}.`);
// } else if (time >= 17 && time < 18) {
//     console.log(`At ${time}:00, I'm en route home.`);
// } else if (time >= 18 && time < 24) {
//     console.log(`At ${time}:00, I'm at ${townOfHome}.`);
// } else {
//     console.log(`That's an invalid time.`);
// }

//      ACTIVITY 7

// let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwsh";
// const vowels = "aeiouAEIOU";
// let lastVowelIndex = -1;
 
// for (let i = str.length - 1; i >= 0; i--) {
//     if (vowels.includes(str[i])) {
//         lastVowelIndex = i;
//         break;
//     }
// }
 
// console.log(`The index of the last vowel is: ${lastVowelIndex}`);

//      ACTIVITY 8

// let word = "ABBA";
// let isSame = word.length > 0 && word[0] === word[word.length - 1];
// console.log(isSame);

//      ACTIVITY 9

// let num1 = 155;
// let num2 = 5;
// let sum = num1 + num2;
// let result;
// if (sum % 2 === 0) {
//     result = sum;
// } else {
//     result = num1 * num2;
// }
// console.log(result);

//      AFTERNOON
//      ACTIVITY 1
// let favouritesongs = [
//     "Lisa - Crossing Field",
//     "Machico - Fantastic Dreamer",
//     "Ultra Tower - Kibō no Uta"
// ]
// console.log (favouritesongs)
//      ACTIVITY 1 STRETCH
// let favouritesongs = [
//     "Lisa - Crossing Field",
//     "Machico - Fantastic Dreamer",
//     "Ultra Tower - Kibō no Uta"
// ]
// console.log (favouritesongs)
// favouritesongs .push ("Takuma Terashima - Nameless Story")
// favouritesongs .push ("Kay Kyser - [I Got Spurs That] Jingle Jangle Jingle")
// console.log (favouritesongs)

// favouritesongs .pop()
// console.log (favouritesongs)
//      ACTIVITY 2
// let numbers = [1, 2, 3, 4, 5];
 
// let doubledNumbers = numbers.map(function(number) {
//     return number * 2;
// });
 
// console.log("Original numbers:", numbers);
// console.log("Doubled numbers:", doubledNumbers);

//      END OF SESSION ACTIVITIES
//      ACTIVITY 1
// let favouritemovingpictures=  [
//     "Sword Art Online: Ordinal Scale",
//     "Sword Art Online Progressive: Aria of a Starless Night",
//     "Sword Art Online Progressive: Scherzo of Deep Night",
//     "KonoSuba: God's Blessing On This Wonderful World: Legend of Crimson",
//     "Ready Player One"
// ]
// console.log (favouritemovingpictures)
// favouritemovingpictures .push("The Seven Deadly Sins The Movie: Prisoners of the Sky", "The Seven Deadly Sins: Cursed By Light")
// console.log (favouritemovingpictures)
// for (let i = 0; i < favouritemovingpictures.length; i++) {
//     console.log (favouritemovingpictures[i])
// }
//      ACTIVITY 2

//      ACTIVITY 3

//      ACTIVITY 4

//      ACTIVITY 5

//      ACTIVITY 6

//      ACTIVITY 7