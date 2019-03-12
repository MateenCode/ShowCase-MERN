const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

// Routes Requires
const card = require("./routes/api/card");

const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true }) // Adding new mongo url parser
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// Use Routes
app.use("/api/", card);

// SSL verifier
app.get(
  "/.well-known/acme-challenge/1-3VS5N8OTJlxUk2r8pxGauNnmDQjfgcTUZSVSIrceo",
  (req, res) => {
    res.send(
      "1-3VS5N8OTJlxUk2r8pxGauNnmDQjfgcTUZSVSIrceo.gyPm8S8N8sv2BQz97qgi614bwOm7zCCmrHh8r-6ATk4"
    );
  }
);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
