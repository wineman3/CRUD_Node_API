var ObjectID = require("mongodb").ObjectID;

module.exports = function(app, db) {
  //post new note
  app.post("/notes", (req, res) => {
    console.log(req.body);
    const note = { title: req.body.title, text: req.body.body };
    db.collection("notes").insert(details, (err, result) => {
      if (err) {
        res.send({ error: err });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
  //get all notes
  app.get("/notes", (req, res) => {
    db.collection("notes")
      .find({})
      .toArray((err, items) => {
        if (err) {
          res.send({ error: err });
        } else {
          res.send(items);
        }
      });
  });
  //get note by id
  app.get("/notes/:id", (req, res) => {
    const details = { _id: new ObjectID(req.params.id) };
    db.collection("notes").findOne(details, (err, item) => {
      if (err) {
        res.send({ error: err });
      } else {
        res.send(item);
      }
    });
  });
  //update note
  app.put("/notes/:id", (req, res) => {
    const details = { _id: new ObjectID(req.params.id) };
    const note = { title: req.body.title, text: req.body.body };
    db.collection("notes").update(details, note, (err, item) => {
      if (err) {
        res.send({ error: err });
      } else {
        res.send(note);
      }
    });
  });
  //delete new note
  app.delete("/notes/:id", (req, res) => {
    const details = { _id: new ObjectID(req.params.id) };
    db.collection("notes").remove(details, err => {
      if (err) {
        res.send({ error: err });
      } else {
        res.send("Note " + req.params.id + " deleted!");
      }
    });
  });
};
