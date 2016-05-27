var userName;
var getAndDisplayRepos = require('../js/apiCall.js').getAndDisplayRepos;
var repository = require('../js/repository.js').Repository;
var getAndDisplayUser = require('../js/apiCall.js').getAndDisplayUser;
var User = require('../js/user.js').User;

$(document).ready(function(){
  $('#userInput').submit(function(event){
    event.preventDefault();
    userName = $('#userName').val();
    $(".userDisplayer").show();
    getAndDisplayRepos(userName,repositoryDisplayer);
    getAndDisplayUser(userName,userDisplayer);
  });
});

repositoryDisplayer = function(repository) {
  $('.output').append("<div class='repositories'><p>Repository Name: " + repository.repositoryName + "</p> <br> <p> Repository Description: " + repository.repositoryDescription + "</p> </div> <br>");
};

userDisplayer = function(user) {
  user = new User(user);
  $('.userDisplayer').empty();
  $('.userDisplayer').append("<div class='user'><p> User Name: " + user.name + "</p> <br> <img src=" + user.avatar_url + "> <br> <p>Email Address: " + user.email + " </p> <p>Followers: " + user.followers + "</p> </div>");
};
