var userName;
var getRepos = require('../js/apiCall.js').getRepos;
var repository = require('../js/repository.js').Repository;

$(document).ready(function(){
  $('#userInput').submit(function(event){
    event.preventDefault();
    userName = $('#userName').val();
    getRepos(userName, repositoryDisplayer);
    // userRepositoryArray.forEach(function(repository){ this block of code has to became a function
    //   console.log(repository.repositoryName);
    // });
  });
});

repositoryDisplayer = function(repository) {
  $('.output').append("<p>Repository Name: " + repository.repositoryName + "<br> </p><p> Repository Description: " + repository.repositoryDescription + "</p> <br> <br>");
};
