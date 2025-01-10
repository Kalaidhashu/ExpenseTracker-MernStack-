var express = require("express")
const mongoose = require("mongoose")
const { v4: uuidv4 } = require("uuid")
const app = express();
//Middleware
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/expense").then(() => {
    console.log("Connected to Database");
});
const expenseSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },  //unique : true means it should be unique
    title: { type: String, required: true },     //required : true means it is mandatory field
    amount: { type: Number, required: true },
})
const Expenses = mongoose.model("Expenses", expenseSchema); // why we need to create a model because we need to perform CRUD operations on the data
app.get("/api/expenses", async (req, res) => {
    try {
        const expenses = await Expenses.find();
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ message: "Error in fetching expenses" });
    }
})
app.post("/api/expenses", async (req, res) => {
    //console.log(req.body)
    const { title, amount } = req.body;
    try {
        const newExpense = new Expenses({
            id: uuidv4(),
            title: title,
            amount: amount
        })
        const savedExpense = await newExpense.save();
        res.status(201).json(savedExpense);
    } catch (err) {
        res.status(500).json({ message: "Error in creating expense" });
    }
})
//write an api to get a single expense using id
app.get("/api/expenses/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const expense = await Expenses.findOne({ id: id });
        if (!expense) {
            return res.status(404).json({ message: "Expense not found" });
        }
        else {
            res.status(200).json(expense);
        }
    } catch (error) {
        res.status(500).json({ message: "Error in fetching expense" });
    }
})
//put
app.put("/api/expenses/:id", async (req, res) => {
    const { id } = req.params;
    const { title, amount } = req.body;
    try {
        const updatedExpense = await Expenses.findOneAndUpdate({ id: id }, { title: title, amount: amount });
        if (!updatedExpense) {
            return res.status(404).json({ message: "Expense not found" });
        }
        else {
            res.status(200).json(updatedExpense);
        }
    } catch (error) {
        res.status(500).json({ message: "Error in updating expense" });
    }


})
//delete using id
app.delete("/api/expenses/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedExpense = await Expenses.findOneAndDelete({ id: id });
        if (!deletedExpense) {
            return res.status(404).json({ message: "Expense not found" });
        }
        else {
            res.status(200).json(deletedExpense);
        }
    } catch (error) {
        res.status(500).json({ message: "Error in deleting expense" });
    }
})







// const students=[{
//     name:"Shiva",
//     age:25,
//     rollno:1
// },{
//     name:"Rahul",
//     age:25,
//     rollno:2
// }]
app.get("/api/sayhello", (req, res) => {
    res.send("Hello World");
    res.end();
})
app.get("/api/students", (req, res) => {
    res.status(200).json(students);
})
app.get("/api/students/:rollno", (req, res) => {
    const { rollno } = req.params;
    const student = students.find((student) => student.rollno == rollno);
    if (!student) {
        res.status(404).send("Student not found");
    }
    else {
        res.status(200).json(student);
    }
})
app.listen(3000, () => {
    console.log("Server is running at port 3000");
})

