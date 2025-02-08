const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");



router.post("/create", async function(req, res) {
    try {
        let owners = await ownerModel.find();
        
        if (owners.length > 5) {
            return res.status(504).send("You don't have permission to create a new owner");
        }

        let { fullname, email, password } = req.body;
        let createdOwner = await ownerModel.create({
            fullname,
            email,
            password,
        });

        res.status(201).send(createdOwner);
    } catch (error) {
        console.error("Error creating owner:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.get("/", function(req, res) {
    res.send("hey");
});

module.exports = router;
