const express = require("express");
const router = express.Router();

// Card Model
const Card = require("../../models/Card");

// @route   POST api/add
// @desc    add card
// @access  Public
router.post("/add", (req, res) => {
  const newCard = new Card({
    title: req.body.title,
    image: req.body.title,
    description: req.body.title,
    github: req.body.title,
    livelink: req.body.title
  });

  newCard
    .save()
    .then(todo => res.json({ statue: true, todo }))
    .catch(err => res.json({ statue: false, err }));
});

// @route   GET api/display
// @desc    Get All Todos
// @access  Public
router.get("/display", (req, res) => {
  Card.find()
    .sort({ date: -1 })
    .then(card => res.json({ statue: true, card }))
    .catch(err => res.json({ statue: false, err }));
});

// @route   POST api/add
// @desc    add card
// @access  Public
// router.patch("/update/:id", (req, res) => {
//   Card.findById(req.params.id)
//     .then(card => {

//     })
//     // .save()
//     // .then(card => res.json({ statue: true, card }))
//     // .catch(err => res.json({ statue: false, err }));
// });

// (card.title = req.body.title),
// (card.image = req.body.title),
// (card.description = req.body.title),
// (card.github = req.body.title),
// (card.livelink = req.body.title)

router.delete("/delete/:id", (req, res) => {
  Card.findById(req.params.id)
    .then(todo => todo.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
