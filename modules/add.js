const sum =(num1,num2)=> num1 + num2
const PI = 3.74
class SomeObject{
    constructor(){
        console.log("Object was created")
    }
}
// module.exports.sum =  sum;
// module.exports.PI = PI;
// module.exports.SomeObject = SomeObject;

module.exports ={sum : sum, PI: PI, SomeObject:SomeObject}