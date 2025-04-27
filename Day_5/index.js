let isRaining = false
isRaining ? console.log(`You need a raincoat`):console.log(`No need for a raincoat`)


let a = 5
let b = 3
a < b ? console.log(`a is less than b`):console.log(`a is grater than b`)

//findimg the length of the array
const mixedDataTypes = ['Ameer',23,true, "Rema"]
let size = mixedDataTypes.length
console.log(size)

//finding the length and first element 
const companies = ["Facebook", "Google", "Amazon", "Oracle","IBM","Apple","Microsoft"]
console.log(companies)
console.log(companies.length)
console.log(companies[0]);

//Finding the last element 
let lastElement = companies.length-1
console.log(companies[lastElement])

//Changing companies name to uppercase and printing one by one

let newArr =[]
for(let i =0;i<companies.length;i++){
newArr.push(companies[i].toUpperCase())
}
console.log(newArr)

//printing out numbers from 0-10
const numbers =[1,2,3,4,5,6,7,8,9,10]
for(let i = 0; i<numbers.length;i++){
    console.log(numbers[i])
}
//printing out numbers from 10-0
for (let i = 10; i > 0; i--){
    console.log(numbers[i])
}
//printing out even numbers from 0 -100
for(let i=0;i<=100;i++){
    if(i%2===0)
        console.log(i)
}
//printing out odd numbers from 0-100
for (let i=0;i<=100;i++){
    if( i%2!==0)
        console.log(i)
}
//printing out he sum of numbers from 0-100
let sum = 0
for(let i=0;i<=100;i++){
sum +=i
console.log(sum)
}
 
