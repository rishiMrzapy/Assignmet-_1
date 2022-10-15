//operators
//=== read krna h,a=10,a+=5=15
//conditions statements if,else
//optinal statement, break,continue,goto
const vnu=require('readline-sync')
// if(1)
// {
//     console.log("hello")
// }
//let a=vnu.questionInt("1st");
// let b=vnu.questionInt("2nd")
// if(a>b)
// {
//     console.log(" a is big")
// }
// else if(b>a){//esle m bhi condition lga skte h error nhi aayega
//     console.log("b is greatr")
// }
// else{
//     console.log("both are eql")
// }
 //let a=vnu.questionInt("entr")
// if(a>10 && a<20)                            //(a>10||a<20)
// {
//     console.log("btwn 10 nd 20")
// }
// else{
//     console.log("out of range")
// }
//nested if else
// if(a>400 && a<500)
// {
//     if(a%2==0)
//     {
//         console.log("env")
//     }
//     else{
//         console.log("odd")
//     }
// }
// else{
//     console.log("Out of range")
// }
// switch
let a=vnu.question("press vnu for hello prs 4.5 for hi nd press 3 for by")
switch(a)
{
    case "vnu":
      {  console.log("hlo")
        break
}
case "4.5":
    {
        console.log(hello);
        break
    }
    case "3":
        {
            console.log("by")
            break
        }
        default:
            {
                console.log("wrong")
            }
}

