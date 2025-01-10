let students = [{
    id:1,
    name:"Kalai",
    age:19,
    grade : 9
},
{
    id:2,
    name:"Nikhi",
    age:20,
    grade : 10
},
{
    id:3,
    name:"Prisha",
    age:21,
    grade : 9
},
{
    id:4,
    name:"Candy",
    age:22,
    grade : 10
},
{
    id:5,
    name:"Susi",
    age:23,
    grade : 8
}
]
// const fs = require('fs')
// const create = (student)=>{
//     let student =[]
//     fs.readFile('./students.json','utf8',(err,data)=>{
//         let ac = data ? JSON.parse(data):[]
//         if(ac.length >0){
//             stuednts = [...ac,student]
//         }
const create = (student)=>{
    let students = []
    fs.readFile('./student.json','utf8',(err)=>{
        let store = data ? JSON.parse(data):[];
        if(store.length>0){
            students = [...store,student];
        }
        else{
            students = student;
        }
    
        fs.writeFile('./student.json',JSON.stringyfy(students),'utf8',(err)=>{
            if(err){
                console.log("Cannot write file");
                return
            }
            console.log("File written successfully");
    })
    });
}
        