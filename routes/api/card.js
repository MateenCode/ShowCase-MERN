const express = require("express");
const router = express.Router();

// Card Model
const Card = require("../../models/Card");

// @route   POST api/add
// @desc    add card
// @access  Public
router.post("/add", (req, res) => {
  Card.find().then(cards => {
    card = cards[cards.length - 1];

    const newCard = new Card({
      id: card.id + 1,
      title: req.body.title,
      image: req.body.image,
      description: req.body.description,
      github: req.body.github,
      liveLink: req.body.liveLink
    });

    newCard
      .save()
      .then(() => console.log({ statue: true }))
      .catch(err => console.log({ statue: false, err }));
  });
});

// @route   GET api/display
// @desc    Get All Todos
// @access  Public
router.get("/display", (req, res) => {
  Card.find()
    .sort({ id: -1 })
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

// @route   PUT api/swap
// @desc    replace ID
// @access  Public
router.put("/swap", (req, res) => {
  const firstID = req.body.firstID;
  const secondID = req.body.secondID;
  Card.find()
    .cursor()
    .on("data", function(card) {
      if (card.id === firstID) {
        card.set("id", secondID);
      } else if (card.id === secondID) {
        card.set("id", firstID);
      }

      card.save(function(err) {});
    })
    .on("end", function() {
      console.log("Done!");
    });
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
