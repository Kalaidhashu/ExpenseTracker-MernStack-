const fs = require('fs')
const http = require('http')
fs.readFile('./sample.json','utf8',(err,data)=>{
    if(err){
        Console.log("Cannot Open file")
        return
    }
    const jsonData = JSON.parse(data)
    const filteredData = jsonData.filter((user)=> user.amount >1500)
    fs.writeFile('./data.json',JSON.stringify(filteredData),(err)=>{
        if(err){
            console.log("Cannot Write to file")
            return
        }
        console.log("Data written to file")
    })
})