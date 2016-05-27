var userName;
var getAndDisplayRepos = require('../js/apiCall.js').getAndDisplayRepos;
var repository = require('../js/repository.js').Repository;
var getAndDisplayUser = require('../js/apiCall.js').getAndDisplayUser;
var User = require('../js/user.js').User;

$(document).ready(function(){
  $('#userInput').submit(function(event){
    event.preventDefault();
    userName = $('#userName').val();
    $("#userButton").show();
    $(".userDisplayer").show();
    $('.output').empty();
    getAndDisplayUser(userName,userDisplayer);
  });

  $('#userButton').click(function(event){
    $(".output").show();
    getAndDisplayRepos(userName,repositoryDisplayer);
  });

});

userDisplayer = function(user) {
  user = new User(user);
  $('.userDisplayer').empty();
  $('.userDisplayer').append("<div class='user'><p> User Name: " + user.name + "</p> <img src=" + user.avatar_url + "> <p>Email Address: " + user.email + " </p> <p>Followers: " + user.followers + "</p> </div>");
};

repositoryDisplayer = function(repository) {
  $('.output').append("<div class='repositories'><p>Repository Name: " +
  repository.repositoryName + "</p> <p> Repository Description: " + repository.repositoryDescription + "</p> <p>Created at: " + moment(repository.created_at).format('MMMM Do YYYY, h:mm:ss') + "</p> </div>");
};
