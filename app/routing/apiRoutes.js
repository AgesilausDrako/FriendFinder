// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================

var newFriend = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(newFriend);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    
    // if (newFriend.length < 10) {
    //   newFriend.push(req.body);
    //   res.json(true);
    // }
    // Possible solution for arrays
    // newFriend.push(userData);
    // newFriend.push(req.body);
    // function getScores() {
    //   return friendsArray.scores.map(function (x) {
    //     return x.scores;
    //   });
    //   getScores();
    //   console.log(x.scores);
    // }
    
    // var scores = getScores();
    // res.json(true);
    // Pseudo code for solution
      // Receive userData object from survey
      // Push userData object to friendsArray
      // Loop over friendsArray 
      // Subtract the scores of each object from the userData object and save in a new array
      // Compare the new array scores and find the closest to userData
      // Return the match and fire the modal
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.

  // app.post("/api/clear", function() {
  //   // Empty out the arrays of data
  //   newFriend = [];

  //   console.log(newFriend);
  // });
};

  