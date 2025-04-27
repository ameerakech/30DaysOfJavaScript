function getAge(age){
    for(let i = 0;i<age.length;i++){
        if(age[i]>=18){
            console.log("You are old enough to drive")
        }
        else{
            console.log("Wait to turn 18")
        }
    }
}
const age = [12,28,13,20,19,2]
getAge(age)

function compareAge(years){
    for(let i = 0;i<years.length;i++){
        if(age[i]>=20){
            console.log("You are older than me")
        }
        else{
            console.log("I am older than you")
        }
    } 
}
const years = [20,14,30,18,10]
compareAge(years)

let a = 4
let b = 3
for (let i=0;i<Number.length;i++){

    if(a > b){
        console.log('4 is greater than 3')

    } 
    else{
        console.log('4 is less than 3')
    }
}

function evenNumbers(nums){
    for(let i = 0;i<nums.length;i++){
        if (nums[i]%2===0){
            console.log("Is even")
        }
        else{
            console.log("Not even")
        }
    }
}
const nums = [3,8,5,10,12,6]
evenNumbers(nums)

const season=(months)=>{
    months.forEach((month)=>{
        switch (month){
            case "september":
            case "october":
            case "November":
                console.log("The is Autum");
                break;
            case "December":
            case "January":
            case "Febuary":
            console.log("The season Winter");
            break;
            
            case "March":
            case "April":
            case "May":
            console.log("the season is Spring");

            case "June":
                case "July":
                case "August":
                console.log("the season is Summer");

            default:
                console.log("Season  doesn't exist");
                break;
        }

    })
}

const months = ["March","June","December","November","Janjune"]
season(months)