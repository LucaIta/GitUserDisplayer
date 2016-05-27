var userName;
var getAndDisplayRepos = require('../js/apiCall.js').getAndDisplayRepos;
var repository = require('../js/repository.js').Repository;

$(document).ready(function(){
  $('#userInput').submit(function(event){
    event.preventDefault();
    userName = $('#userName').val();
    getAndDisplayRepos(userName, repositoryDisplayer);
  });
});

repositoryDisplayer = function(repository) {
  $('.output').append("<div class='repositories'><p>Repository Name: " + repository.repositoryName + "</p> <br> <p> Repository Description: " + repository.repositoryDescription + "</p> </div> <br>");
};
