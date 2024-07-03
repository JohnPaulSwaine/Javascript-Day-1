//      MORNING


// let age = 69
// if (age < 18) {
//     console.log ("£8")
// }
// if (age >=18 && age <= 59 ) {
//     console.log("£10.95")
// }
// if (age >= 60) {
//     console.log("£7.50")
// }

// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds.")
// }
// pressGrindBeans()

// const faveColour = () => {
//     console.log("My favourite colour is Blue.")
// }
// faveColour()

// let coffeeIsGrinding = true
// const grindbeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("Grinding Stopping in 5, 4, 3, 2, 1")
//         coffeeIsGrinding = false
//     }
//     else {
//         console.log("Grinding shall begin in 5, 4, 3, 2, 1.")
//         coffeeIsGrinding = true
//     }
// }
// grindbeans()

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`)
// }
// cashWithdrawal(300, 50449921)
// cashWithdrawal(30, 50449921)
// cashWithdrawal(200, 50447921)

// let accnumber = 50449921
// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`)
// }
// cashWithdrawal(300, accnumber)
// cashWithdrawal(30, accnumber)
// cashWithdrawal(200, 50447921)

// const faveColour = (colour) => {
//     console.log(`My favourite colour is ${colour}.`)
// }
// faveColour("Blue")
// faveColour("white")
// faveColour("yellow")
//      numbers dont need quotation marks whereas strings will (normal text). boolean (T/F) also doesnt need quotation marks

// const addUP = (num1, num2) => {
//     return num1 + num2
// }
// addUP(7, 3)
// console.log(addUP (2,5))
//      
// const multiplybyNineFifths = (celsius) => {
//     return celsius * 9/5
// }
// const getFahrenheit = (celsius) => {
//     return multiplybyNineFifths(celsius) + 32
// }
// console.log("The temperature is currently " + getFahrenheit(15) + " degrees fahrenheit.")

//         FUNCTION DECLARATION

// function multiplybyNineFifths(celsius) {
//     return celsius * 9/5
// }
// function getFahrenheit(celsius) {
//     return multiplybyNineFifths(celsius) + 32
// }
// console.log("The temperature is currently " + getFahrenheit(15) + " degrees fahrenheit.")

//      FUNCTION EXPRESSION

// const square = function(number) {
//     return number * number
// }
// console.log(square(5))

//      ACTIVITY 1
// const factorial = (n) => {
//     if ((n===1) || (n===1)) {
//         return 1
//     } else {
//         return (n*factorial(n-1))
//     }
// }
// console.log(factorial(33))

//      ACTIVITY 2
// let ordercount = 0
// const takeOrder = (topping1, topping2) => {
//     console.log(`I would like a pizza with ${topping1} and ${topping2} please.`)
//     ordercount++
// }
// takeOrder("Ham", "Pineapple")
// takeOrder("Beef", "Chicken")

//      ACTIVITY 3
// const balance = 200
// const pin = 4937
// const cashWithdrawal = (amount, accnum, pinnum) => {
//     if ((pin === pinnum) && (balance => amount)) 
//         {
//         console.log(`Withdrawing ${amount} from account ${accnum}`)
//     } 
//     if (pin!=pinnum) {
//         console.log("Error. Incorrect Pin.")
//     }
//     if ((pin===pinnum) && (balance<amount)) {
//         console.log("Error. There is not enough in available balance.")
//     }
// }
// cashWithdrawal(300, 50449921, 4937)
// cashWithdrawal(30, 50449221, 3947)
// cashWithdrawal(200, 50447921, 4937)
