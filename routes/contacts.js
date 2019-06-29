const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const auth = require("../middleware/auth");
const Contact = require("../models/Contact");

//@route GET api/contacts

//@desc GET all users contacts

//@access private

router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

//@route POST api/contacts

//@desc  add new contact

//@access private

router.post("/", (req, res) => {
  res.send("add contact");
});

//@route PUT api/contacts/:id

//@desc  update contact

//@access private

router.put("/:id", (req, res) => {
  res.send("update contact ");
});

//@route PUT api/contacts/:id

//@desc  delete contact

//@access private

router.delete("/:id", (req, res) => {
  res.send("delete contact ");
});

module.exports = router;
