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
    image: req.body.image,
    description: req.body.description,
    github: req.body.github,
    liveLink: req.body.liveLink
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
    .then(card => res.json(card))
    .catch(err => res.json({ statue: false, err }));
});

// @route   PUT api/update
// @desc    update card
// @access  Public
router.put("/update/:id", (req, res) => {
  Card.updateOne({ _id: req.params.id }, { $set: req.body }, { new: true })
    .then(card => res.json({ statue: true, card }))
    .catch(err => res.json({ statue: false, err }));
});

// @route   PATCH api/swap
// @desc    replace date
// @access  Public
router.put("/swap", (req, res) => {
  const firstDate = req.body.firstDate;
  const secondDate = req.body.secondDate;

  console.log(firstDate, secondDate);

  // Card.find()
  //   .cursor()
  //   .on("data", function(card) {
  //     if (card.date === firstDate) {
  //       card.set("date", secondDate);
  //     } else if (card.date === secondDate) {
  //       card.set("date", firstDate);
  //     }

  //     card.save(function(err) {});
  //   })
  //   .on("end", function() {
  //     console.log("Done!");
  //   });

  // Card.find()
  //   .then(cards => {
  //     cards.forEach(card => {
  //       if (card.id === firstDate) {
  //         return card.updateOne({ $set: { date: secondDate } });
  //       } else if (card.id === secondDate) {
  //         return card.updateOne({ $set: { date: firstDate } });
  //       } else {
  //         return card;
  //       }
  //     });
  //   })
  //   .then(() => console.log("working"));
});

// @route   DELETE api/delete
// @desc    delete card
// @access  Public
router.delete("/delete/:id", (req, res) => {
  Card.findById(req.params.id)
    .then(card => card.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
