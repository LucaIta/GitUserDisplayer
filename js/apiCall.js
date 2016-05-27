var apiKey = require('./.env').apiKey;

exports.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    console.log("api key is" + apiKey);
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
