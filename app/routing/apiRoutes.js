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

    var match = [41, "", ""];
    var userData = req.body;
    console.log(userData);
    for(var i=0; i<newFriend.length; i++) {
      var sum = 0;
      for(var j=0; j<userData.scores.length; j++) {
        sum+=Math.abs(parseInt(newFriend[i].scores[j]) - parseInt(userData.scores[j]));
      }
      if (sum < match[0]) {
        match[0] = sum;
        match[1] = newFriend[i].name;
        match[2] = newFriend[i].photo;
      }
    }
   
    newFriend.push(userData);
    console.log(userData);
    res.json(match);
  });
};

  