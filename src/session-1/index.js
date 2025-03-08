import {add_numbers} from "./functions.js"
// import * as fun from "./functions"

// // console.log("Hello World")

// // single line commecnt

// /*
//     Multiline comment
// */
// //ES6

// var myVariable = "hi"

// const PI = 3.14  // mutability VS assignability
// let random = 9944

// {

//     let random = "im a string now"
//     // console.log(random)
// }

// // console.log(random)and 


// // Numbers:
// const n = 100
// const x = 19.6
// // console.log(typeof (x))


// // Strings using "" ''
// const myString = "random"
// const myString1 = 'random'
// const special = `the value is ${x}` //template string
// // console.log(special)

// // boolean types:
// const b1 = true
// const b2 = false


// // Undefined & Null
// const v1 = null
// const v2 = undefined


// // operations:

// // addition: + 
// let n1= 10 
// let n2= 10 

// // console.log(n1 + n2)

// // // subtraction: -
// // console.log(n1 - n2)

// // // multiplications: *
// // console.log(n1 * n2)

// // // division: /
// // console.log(n1 / n2)

// // // modular division: %
// // console.log(n1 % n2)

// // // power : **
// // console.log(n1 ** n2)


// // // comparision operators:

// //     // greater than > 
// // console.log( n1 >= n2 )

// //     // less than: <
// // console.log( n1 <= n2 )

// //     // equal ==:
// // console.log( n1 == n2 )

// //     // not equal != :
// // console.log( n1 != n2 )


// // // logical operations:

//     // logical and &&:
// // console.log(true && true)

// //     // logical or: 
// // console.log(true || false)

// //     // logical not:
// // console.log(! true)


// // conditionals:
// // if (true){
// //     console.log("This is true")
// // } else if (false) {
// //     console.log("this a false value")
// // } else {
// //     console.log("undefined  maybe ?")
// // }

// // switch case :
// let day = "sunday"
// //  let day = undefined

// //  switch (day.toLowerCase()){
// //     case "sunday":
// //         console.log("sunday")
// //         break
// //     case "monday":
// //         console.log("monday")
// //         break
// //     case "tuesday":
// //         console.log("tuesday")
// //         break
// //     default:
// //         console.log("no idea")
// // }

// // Loops:
// for (let i = 0; i <5; i++){
//     // console.log(i)
// }

// let i = 0
// while(i < 5){
//     // console.log(i)
//     i += 1
// }

// var j = 1
// while (true){
//     // console.log(j)

//    if (j == 7){
//         j++
//         continue
//     }

//    if (j % 7 === 0){
//         console.log(j)
//         break
//    }

//    j++
// }


// const tablue = ["ronaldo", 7]

// console.log(tablue[1])


// tablue.push("Messi")

// console.log(tablue)

// console.log(tablue.pop())
// console.log(tablue)

// tablue[5] = "no"
// console.log(tablue)



// const o = {
//     "name": "hamza", "hobbies":["study", "read"]
// }

// const empty = {}

// empty["format"] = "json"
// empty["key-2"] = "some value"

// // delete empty["key-2"]

// empty.functionName = () => console.log("hey")

// console.log(empty["format"])
// console.log(empty.format)


// PART-1 :
// const PlayList = ["song-1", "song-2", "song-3", "song-4", "song-5"]
// console.log(PlayList[2])
// PlayList[PlayList.length] = "final-song"
// console.log(PlayList)


// // PART-2
// const favoriteBook = {
//     "title": "The c language book",
//     "Author": "ken thompson",
//     "pub-year": 1979,
//     "chapters": ["Intro", "chap-1", "summery"]
// }

// favoriteBook.summery = () => console.log(`title: ${favoriteBook.title}  Author: ${favoriteBook.Author}`)

// favoriteBook.summery()


// // No params, No return
// function Hello(){
//     console.log("Hello World")
// }

// // one param, No return
// function HelloName(name){
//     console.log(`Hello World, ${name}~~~`)
// }

// HelloName("ronaldo")

// function HelloNameReturn(name){
//     return `Hello World, ${name}~~~`
// }

// // ES6- Arrow Function
// const aFunc = (name) => {
//     console.log(`Hello World, ${name}~~~`)
// }

// aFunc("zizou")

add_numbers(2,3)

const numbers = [1,2,3,4,5,6,7,8]

const even = numbers.filter((x) => x%2 === 0)

console.log(even)

const mappedList = numbers.map( (x)=>x*2 )
console.log(mappedList)