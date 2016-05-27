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
  $('.output').append("<p>Repository Name: " + repository.repositoryName + "<br> </p><p> Repository Description: " + repository.repositoryDescription + "</p> <br> <br>");
};
