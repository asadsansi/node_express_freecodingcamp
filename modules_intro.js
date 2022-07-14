// const os = require('os')
// console.log(os.userInfo())

// console.log(`${os.uptime()} second`)
// console.log(os.arch())
// const currentOs = {
//     name:os.type(),
//     release:os.release(),
//     totalMen:os.totalmem(),
//     freeMen:os.freemem()
// }
// console.log(currentOs)

//////////////////////////////////////////////////////

// const path = require('path')

// console.log(path.sep) // platform-specific file separator

// const filePath = path.join('/data','files','names.txt')
// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base)

// const absolute = path.resolve(__dirname,'data','files','names.txt')
// console.log(absolute)

////////////////////////////////////////////////////


// const {readFileSync,writeFileSync} = require('fs') // synchronous way..............

// // const fs = require('fs')
// // fs.readFileSync                 same as above
// //fs.writeFileSync

// const names = readFileSync('./data/files/names.txt','utf8')
// console.log(names)
// const deparments = writeFileSync('./data/files/departments.txt',
// `software,\ncomputer,\ninformation ${names}`,
// {flag:'a'})



const { readFile, writeFile } = require('fs') //asychoronously way.........

readFile('./data/files/names.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }

    const nameFile = result

    readFile('./data/files/departments.txt','utf8',(err,result)=>{
        if (err) {
            console.log(err)
            return
        }
    
      const departmentFile = result
      writeFile('./data/files/names_departments.txt',`departments: ${departmentFile} \n names: ${nameFile}`,(err,result)=>{
        if (err) {
            console.log(err)
            return
        }
    
        console.log(result)
      })
    })
})






