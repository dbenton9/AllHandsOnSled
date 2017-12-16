var db = require("../public/models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/all", function(req, res) {
    db.families.findAll({})
    .then(function(dbfamilies) {
      res.json(dbfamilies);
    });
  });

  // POST route for saving a new post
  app.post("/api/families", function(req, res) {
    console.log(req.body);
    db.families.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        description: req.body.description,
        estAmount: req.body.estAmount
    })
    .then(function(dbfamilies) {
      res.json(dbfamilies);
    });
  });

  // PUT route for updating posts
  app.put("/api/families", function(req, res) {
    db.families.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbfamilies) {
      res.json(dbfamilies);
    });
  });
};
