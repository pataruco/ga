// Description:
//
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//

module.exports = function (robot) {
  //  YOUR CODE HERE
};

/************************************

EXAMPLES OF THE KEY HUBOT FUNCTIONS

************************************/

// module.exports = function(robot) {

//  Example
//  robot.hear(/javascript/i, function(msg) {
//    return msg.send("I love writing code!");
//  });

/* Basic example of respond / send. If the user enters hi or hello the bot responds "Howdy!" */
// robot.respond(/hi|hello/i, function(msg) {
//   return msg.send("Howdy!");
// });

/* Random Example
  If a user asks what is your favourite x, the bot respond according to the question */
// robot.respond(/what is your favourite (.*)/, function(msg) {
//   let fav;
//   fav = msg.match[1];
//   console.log(fav);
//   switch (fav) {
//     case "food":
//       return msg.reply("I'm a robot--I don't eat food!");
//       break;
//     case "band":
//       return msg.reply("It's gotta be Daft Punk!");
//       break;
//     case "programming language":
//       return msg.reply("Javascript, of course!");
//       break;
//     default:
//       return msg.reply("I don't have a favourite " + fav + ". What's yours?");
//   }
// });
// };
