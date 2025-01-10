// const http = require("http");
// const modules =require('./modules');
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     const a = 6;
//     const b = 3;
//     const results = `
// Addition of ${a} and ${b}: ${modules.add(a, b)}
// Subtraction of ${a} and ${b}: ${modules.sub(a, b)}
// Multiplication of ${a} and ${b}: ${modules.mul(a, b)}
// Division of ${a} and ${b}: ${modules.div(a, b)}
// `;

//     res.write(results);
//     res.end();
// });

// server.listen(3000, () => {
//     console.log("Server running on port 3000")
// })




// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//     fs.readFile('./sample.json', 'utf8', (err, data) => {
//         if (err) {
//             res.end("Error reading JSON file");
//             return;
//         }
//         //res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(data); 
//     });
// });

// server.listen(3000, () => {
//     console.log("Server running on port 3000");
// });


