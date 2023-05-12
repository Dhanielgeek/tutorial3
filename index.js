// let myName = "hello guys im learning javascript"
// // let num = 247
// // let isTrue = false

// let otherName = myName.toUpperCase()
// // let another = myName

// console.log(otherName)
// // console.log(another)

// let daniel = "CAN YOU CODE IN JAVASCRIPT"
// console.log(daniel.toLowerCase())

// let userName = "daniel"
// let wel = "welcome"

// let userWel = wel + " " + userName + " " + "thanks for coming to our page"
// let mynew = `${wel} ${userName} thanks for coming out to our page`
// console.log(userWel)
// console.log(mynew)

// let firstName = "Okon"
// let secondName = "Daniel"

// let userFullname = firstName.concat(secondName)
// console.log(userFullname)

// let myString = "the director is here!!!"
// console.log(myString.includes(" "))
// console.log(myString.charAt(6).toUpperCase())
//   function dan(a){
//     if(a %2=== 0){
//         return "dan"
//     }else{
//         return "edidiong"
//     }
//   }
//  // console.log(dan(2))


//  let myCode = "This is my test string to practice the JavaScript string function concepts.";
//  console.log(myCode.length);
//  //the length of the first sentence in the string is 75//
//  let myDaniel = 'This is gonna be fun.';
//  console.log(myDaniel.length);
//  //the length of the second sentence in the string is 21//
//  let myOther = "This is my test string to practice the JavaScript string function concepts. This is gonna be fun.";
//  console.log(myOther.indexOf("This"));
// //the first occurance of the word "This" i.e the postition of the charater of the first occureance is 0

//  let myData =  "This is my test string to practice the JavaScript string function concepts. This is gonna be fun.";
//  console.log(myData.lastIndexOf("This"));
//  //the last occurance of the word "This" i.e the postition of the charater of the last occureance is 76
//  let sTart ="This is my test string to practice the JavaScript string function concepts. This is gonna be fun.";
//  console.log(sTart.substr(12,12).length);
//  // the substring of the length 12 from the start which was asked in the qustion was est string to practice the Javascript string function concepts. This is gonna be fun.//

//  let eNd ="This is my test string to practice the JavaScript string function concepts. This is gonna be fun."
//  console.log(eNd.substring(5,12).length)

//  let num = 4.5

//  console.log(Math.ceil(num))
//  console.log(Math.floor(num))
 

//  console.log(Math.pow(5,3))

//  console.log(Math.random())
//  console.log(Math.floor(Math.random()* 5))
//  console.log(Math.round(num))

//  console.log(Math.max(12,13,45,98,23))
  
  
// let isArray = ["daniel","joshua","grace","kcee","tina",45]
// isArray[4] = 'apple'

// console.log(isArray.length);
// console.log(isArray);
// console.log(isArray[3]);

// let isArray2 = ["david","martha","travis",["dam",34],"obi"]
// isArray2[3][1]= "navsta"
// isArray2.push("setup")
// isArray2.unshift("travista")
// isArray2.shift()
// isArray2.pop()
// console.log(isArray2[3][0])
// console.log(isArray2);

// let ajTech =[]
// console.log(ajTech.push("daniel"))
// ajTech.push("mike")
// ajTech.push("toby")
// ajTech.push("lava")
// console.log(ajTech);

// let ajTech1 = ["dammygirl","ayo","faithia","austine","travista"]
// let randOM = Math.floor(Math.random() * ajTech1.length)
// console.log(randOM)
// console.log(ajTech1[randOM])
// console.log(ajTech1.sort())
// console.log(ajTech1.reverse())

// let travAnd = "my name is daniel,and i love javascript,good"
// console.log(travAnd.split(",").join())
// //console.log(travAnd.join(","))
// let oche = ["blue","red","yellow","black"]
// let danii = oche.slice(1)
// console.log(danii)

// let gra = ["2eyes","james","dickson","okon",15]
// //gra.fill("pink",1,5)
// console.log(gra)
// console.log(gra.includes("dickson", 2))

let fransis = ["football","beansAndBread","david","obi","orange",true]
  let subfran = fransis.splice(2,4, "people of God")
  console.log(subfran);
 //console.log(fransis)

//function in javascript

// function add (){
  //console.log("hurry im writing my first function")
//   //return "hurry im writing my first function"
//   let x = 5;
//   let y = 3;
//   let result = x+y
//   return result
// }
// console.log(add())

// const add1 = () => {
//   let x = 7;
//   let y = 4;
//   return x+y
// }
// console.log("fat arrow",add1())



// function sub(){
//   let w = 5;
//   let v = 3
//   return w-v
// }
// console.log(sub())

// function multy(){
//   let s = 5;
//   let d = 3
//   return s*d
// }
// console.log(multy())


// const addy = (x,y) =>{
//   return x + y
// }
// console.log(addy(20,10))

// const square = (x,y,r) => {
//  return x-y+r
// }
// console.log(square(34,40,20)) 
// }

// function getIngredent(x,y){
//   let j = "like eating vegatable" + x
//   y(j)

// }
// getIngredent("edwin",(y)=>{
//   console.log(y)
// })


// let ages = [13,18,28,20,10,50]


// let result = ages.filter((x)=>{
//   return x > 18
// })
// console.log(result)

// let student=[
//    {
//     name: "david",
//     age:20
//    },
//    {
//     name: "daniel",
//     age: 40
//    },
//    {
//     name: "ben",
//     age: 18
//    }
// ]
// let abbo = student.filter((el)=>{
//   return el.age <=20
// })
// console.log(abbo)

// let lenghts = ["Bilbo","Gandlaf","Nazul"].map(item=>item.length);
// console.log(lenghts)

// let arr = [3,4,5,6]
// let other = arr.map(function (arr){
//   return arr * 3
// })
// console.log(other)

// let use = [
//   {firstName: "daniel",
// lastName:"benn"},
// {
//   firstName:"sarah",
//   lastName:"davis",
// }
// ]
// let fullNames = use.map(function(el){
//   return `${el.firstName}`;
// })
// console.log(fullNames)


// const month = ["january","febuary","march","april"]
// month.forEach(function(months){
//   return months
// })
// console.log(month)


// let checkNum = [23,78,33,4,1,9,2]

// let newCheck = checkNum.reduce((a,b,)=> a + b,1000)
// let newFind = checkNum.find(el=>el<33)
// let newmap = checkNum.map((el)=>{
//  return el * 5
// })
// console.log(newmap)
// console.log(newCheck);
// console.log(newFind)


//arthmetic operator; + - * / % ++ --

// console.log(7%5)
// console.log(5%2)

// let xy= 7;
// xy++
// console.log(xy)
 
// let ui = 78
// ui+=4
// console.log(ui)

// //comperison operator

// let ki=5
// let kp ="5"
// let ik = 20
// console.log(ki==ik)
// console.log(ki!=ik)
// console.log(ki===kp)
// console.log(ki < ik)
// console.log(ki <= ik)
// console.log(ki >= ik)


//logical operator && , ||

// console.log((5<6) && (5>9))

//true and true = true
// false and false = true
// false and true = false
// true and false = false

//let =["asdf","sd","something","right",'position

myArry= ["asdf","sd","something","right",'position']
//  function findLarge (long){
//   let max_str = long[0].length;
//   // let result = long[0]
//   for(let i = 1; i < long.length; i ++){
//     let maxi = long[i].length;
//     if(maxi>max_str){
//       ans = long[i]
//       max_str = maxi;
//     }
//   }
//   return ans;
//  }
//  console.log(findLarge(myArry))
 let mynewArry=myArry.reduce((previous, current)=>{
return current.length > previous.length ? current : previous
})
console.log(mynewArry)

//sum of positive intergers in array

sum = [1,3,6,2,5,10]
function alto(ayy){
  let result = [0,0]
  for (let i = 0; i< ayy.length; i++)
{
if(i % 2) result[1] += ayy[i];
else
result[0]+= ayy[i]
}
return result
}
console.log(alto(sum))
//finding common elements in an array
function check1(arry1,arry2){
  for(let i =0; i< arry1.length;i++){
    if (arry2.indexOf(arry1[i])!=-1)
    return true;
  }
  return false
}
console.log(check1([1,2,3],[3,4,5]))
console.log(check1([1,2,3],[5,6,7]))


let num = 5 - "3";
console.log(num)

//operators
let a = 5
let b = 6
let c = "5"

//arithmetic operators + - * / % ++ --
//comperison operators > < >= <= == === != !==
console.log(a != c)

//logical operator && || !

console.log((7>5)) && (5===5)
console.log((7<5)) && (5===5)
console.log((7 < 5) || (5 === 5))
console.log("check",!(5===5)) & ((10 != 2))
console.log(!(2>6))

//assigenment operator += /= =

let x = 30;
x+= 5
console.log(x)

let y = 15
y/= 5
console.log(y)

//tenary operator synatx
//the statement 1 is true while statement 2 is false
// expression ? statement1 is for true; : statement2 is for false; e.g
let tena = !false ? "hello class" : "hello student"
console.log(tena)

let user= ""
console.log(!user ? "login successful" : "acess denied")



 let arRay=[NaN,0, 15,false,-22,"",undefined,47,null,94]
let newarr = arRay.filter((el)=>{
 return el!= false && el!=undefined && !isNaN(el)
})
console.log(newarr)

console.log(parseInt("123Hello"))
console.log(parseInt("Hello123"))
ii9
let dum = 0;
const ab =[1,2,3]
ab.forEach(getdum)
console.log(dum)
function getdum(el){
  return dum+=el
}
console.log(getdum)





function functionWithArgs(){
  console.log([1,2],[7,9])
}