
const mathConstant = require('./constants')
const area = (radius)=>{
    console.log(`Area is ${mathConstant.PI*radius*radius}`)
}

module.exports = area   // function exporting , default exporting

// another apparoach
module.exports.exceptionText = "There is exception"

const printValue=(text)=>{
    console.log(text)
}

//another apparoch
module.exports.printText = printValue