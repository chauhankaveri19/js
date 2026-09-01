//function expression 
 let multiply=function(a,b){
    return a*b
}
let result=multiply(2,3)
console.log(result)

//arrow function 
let division =(a,b)=>{
    return a/b
}
let main= division(4,2)
console.log(main)

//short
let divisionnn=(a,b)=>  a/b;
console.log(divisionnn(15,3))

//default parameter
function welcome(name="guest"){
    console.log("welcome"+"  "+name)
}
welcome("kaveri")
welcome()

// global scope 
let age=20;
function myage(){
    console.log(age)
}
myage()

//local scope
function mymark(){
    let mark=35
    console.log(mark)
}
mymark()

//callback 
function helloo(){
    console.log("hello")
}
function worldd(callback){
   callback()
}
worldd(helloo)