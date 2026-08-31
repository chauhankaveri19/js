function name(){
    console.log("hello")
    console.log("world")

}
name()
name()
name()



//function with parameter
function add(a,b){
    console.log(2+3)
}
add()

function addd(a,b){
    console.log(3+"4")
}
addd()

function adddd(a,b){
    console.log(3+"a")
}
adddd()

//function with return keyword
function addtwonumber(a,b){
 let result=a+b
 return result
}
result= addtwonumber(5,2)
console.log("Result:",result)

function loggedin(username){
    if(username===undefined){
        console.log("enter your name")
        return
    }
    return `${username} logged in`
}
console.log(loggedin("kaveri"))

console.log(loggedin())
