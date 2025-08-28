const express = require("express")
const router = express.Router()
const Employee = require("../models/user")

router.get("/" , (req ,res) => {
    res.render("home")
})

router.get("/create-user" , (req , res) => {
    res.render("addEmp")
})

router.post("/save-emp" , async (req , res) => {
    console.log(req.body)

    try {
        const employee = new Employee({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            city: req.body.city,
        })
        await employee.save()
        res.redirect("/emp")

        res.status(201).json({
            msg: "User created Successfully"
        })
    } catch (error) {
        console.log("ERROR: ", error);
        
    }
})

router.get("/show-all-emp" , async (req , res) => {
    try {
        const result = await Employee.find()
        res.render("showEmp", {list: result})

    } catch (error) {
        console.log("ERROR: " , error);
        
    }
})

module.exports = router;