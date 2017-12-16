var db = require("../public/models");
var multiparty = require('multiparty');
var cloudinary = require('cloudinary');

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

    var form = new multiparty.Form();

    form.parse(req, function(err, fields, files) {

      cloudinary.config({
        cloud_name: 'dehuuhaib',
        api_key: '852647781625234',
        api_secret: 'DWfHbtqiJhXCwAG8DGCHEKzosWA'
      });

      cloudinary.uploader.upload(files.picture[0].path, function(result) {
        console.log(result)

        db.families.create({
          firstName: fields.firstName[0],
          lastName: fields.lastName[0],
          email: fields.email[0],
          description: fields.description[0],
          estAmount: fields.estAmount[0],
          picture: result.secure_url
        })
        .then(function(dbfamilies) {
          res.json(dbfamilies);
        });

      });


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
