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
  app.get("/api/friends", function(req, res) {
    res.json(newFriend);
  });


  // API POST Requests
  app.post("/api/friends", function(req, res) {
    
    // Loop over friendsArray 
    // Subtract the scores of each object from the userData object and save in a new array
    var totalDifference = 0;
    // var match;
    var userData = req.body;
    console.log(userData);
    for(var i=0; i<newFriend.length; i++) {
      for(var j=0; j<userData.scores.length; j++) {
        totalDifference += Math.abs(parseInt(newFriend[i].scores[j]) - parseInt(userData.scores[j]));
      }
    }
    console.log(totalDifference);

    // if () {

    // }
        // return friendsArray.scores.map(function (x) {
        //   return x.scores;
        // });

    // Receive userData object from survey
    // Push userData object to friendsArray
      // newFriend.push(req.body);
      // res.json(true);
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

    
    // Pseudo code for solution
      
      // Compare the new array scores and find the closest to userData
      // Return the match and fire the modal
  });
};

  