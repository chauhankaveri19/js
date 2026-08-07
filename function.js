function welcome(){
    console.log("welcome kaveri")

}
welcome()
welcome()
welcome()


//function with parameter
function greet(name){
    console.log("hello"+ " " +name)
}
greet("kaveri")
greet("priya")

//function with two parameter
function student(name,age){
    console.log("student name:"+name+" "+"age:"+age)
}
student("kaveri",20)
student("priya",30)

//return keyword
function multiply(a,b){
    return a*b
}
let result=multiply(5,4)
console.log(result)


//practical task
function introduce(name,course){
    console.log("name:",name)
    console.log("course:",course)
}
introduce("kaveri","bca");
introduce("riya","bba")

//sqaure
function square(num){
    return num*num
}
console.log(square(5))
console.log(square(10))

//practical 3
function isadult(age){
    if(age>18){
        return "adult"
    }
  
        return "minor"
    
}
console.log(isadult(25))
console.log(isadult(10))