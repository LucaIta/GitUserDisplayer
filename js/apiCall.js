var apiKey = require('./.env').apiKey;
var userRepositoriesArray = [];
var Repository = require('../js/repository.js').Repository;

exports.getAndDisplayRepos = function(userName, repositoryDisplayer){
  userRepositoriesArray = [];
  $('.output').empty();
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){

    console.log(response);
    response.forEach(function(repository){
      newRepository = new Repository(repository);
      userRepositoriesArray.push(newRepository);
    });

    userRepositoriesArray.forEach(function(repository){
      repositoryDisplayer(repository);
    });

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });

};


exports.getAndDisplayUser = function(userName,userDisplayer){

  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    userDisplayer(response);
  });

};
