// ____________________________________________________________________________________
// LOAD DATA
// Array of friend objects
// ____________________________________________________________________________________

var friendData = require("../data/friends");

// ____________________________________________________________________________________
// ROUTING
// ____________________________________________________________________________________

module.exports = function(app) {
// API GET Requests
// JSON of the data in the friend table
// ____________________________________________________________________________________

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });



  app.post("/api/friends", function(req) {
    // The "server" will add the information from the survey to the friendArray
    // req.body is available since we're using the body-parser middleware
      friendData.push(req.body);
  });

  // ---------------------------------------------------------------------------

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendData = [];

    console.log(friendData);
  });
};
