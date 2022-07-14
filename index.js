
const _ = require('lodash')

const items = [1,[2,[3,[4]]]]


const newItems = _.flattenDeep(items)
console.log(newItems)

//////////////////////////////////////
// const http = require('http')
// console.log('started........')
// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('Home page node js')
//     }
//    else if (req.url === '/about') {
//         res.write('about page')
//     } else {
//         res.write(`<h1>Oops</h1>
//         <p>We can't seems to find the page you are looking for</p>
//         <a href="/"> Back Home </a>
//      `)
//     }
// res.end()

// })

// server.listen(9000)

///////////////////////////////////////


//module exporting access 
// const area = require('./utils')
// area(12)
// console.log(area.exceptionText)
// console.log(area.printText("module exporting different ways"))

// require('./dbconnection')


