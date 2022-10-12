function redundantReturn(str);{
function Fun2() {
    return "From fun2";
}
return Fun2();
}
const remember = redundantReturn('string');
console.log(redundantReturn())


// function redundantReturn(str){
//     return function(){
//         console.log(`this is ${str}.`)

//     }
// }
