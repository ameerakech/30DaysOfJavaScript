//EXERCISE ONE
let challenge = "30 Days Of JavaScript"
console.log(challenge)

console.log(challenge.length)

console.log(challenge.toUpperCase())

console.log(challenge.toLowerCase())

console.log(challenge.substring(0,2))

console.log(challenge.includes("Script"))

console.log(challenge.split())

console.log(challenge.split(" "))

let companies = "facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon"
console.log(companies.split(","))

let string = "30 Days of JavaScript"
console.log(string.replace("30 Days of JavaScript","30 Days of Python"))

console.log(string.charAt(15))

console.log(string.charCodeAt(11))

console.log(string.indexOf("a"))

console.log(string.lastIndexOf("a"))

let word = "You cannot end a sentence with because because because is a conjuction"
console.log(word.lastIndexOf("because"))

console.log(word.indexOf("because"))

console.log(word.search("because"))

console.log(string.trim())

console.log(string.startsWith("30 Days of JavaScript"))
console.log(string.endsWith("30 Days of JavaScript"))

console.log(string.match("a"))

let str = "30 Days Of"
let str1 = "JavaScript"
let str2 = str.concat(str1)
console.log(str2)

console.log(str1.repeat(2))

//EXERCISE TWO

let quote = 'There is no exercise better for the heart than reaching down and lifting people up.' 
console.log(quote)

 let quote1 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
 console.log(quote1)

 let sentence = "I hope this course is not full of jargon"
 console.log(sentence.includes("jargon"))

 //EXERCISE THREE
 let feeling = "Love is the best feeling in the world. Some found their their love and some are still looking for love"
 console.log(feeling.match("love"))