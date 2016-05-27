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
