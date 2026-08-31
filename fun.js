function first(){
    console.log("hello world")
}
first()

function add(a,b){
    return (a+b)
}
console.log(add(5,6))

let z=49
function check(){
    if(z%2==0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
}
check()



let a=2
let b=7
let c=80
function largest(){
    if(a>b && a>c){
        console.log("a is largest")
    }
    else if(a<b && b>c){
        console.log("b is largest")
    }
    else{
        console.log("c is largest")
    }
}
largest()


    function marks(marks1,marks2,marks3){
        return marks1 + marks2 + marks3
    }
    let total=marks(20,30,40)
    console.log(total)

function sqaure(a){
    return a*a
}
let result=sqaure(2)
console.log(result)


function per(p,q,r,s,t){
    return p+q+r+s+t /5
}
let w=per(20,30,4,50,60)
console.log(w)