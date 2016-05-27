exports.User = function(user){
  this.name = user.name;
  this.avatar_url = user.avatar_url;

  if (user.email === null){
    this.email = "not available";
  } else {
    this.email = user.email;
  }

  this.followers = user.followers;
};

//
// can I create someting like this to check all the parameters instead of having a lot of if/else statements?
// var userProperties = ["name","avatar_url","email","followers"];
//
// exports.User = function(user){
//   userProperties.forEach(function(property){
//     if (user.property === null) {
//       this.property = "not available";
//     } else {
//       this.property = property;
//     }
//   });
// };
