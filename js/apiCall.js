var apiKey = require('./.env').apiKey;
var userRepositoryArray = [];
var Repository = require('../js/repository.js').Repository;

exports.getRepos = function(userName, repositoryDisplayer){
  userRepositoryArray = [];
  $.get('https://api.github.com/users/' + userName + '/repos' + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    response.forEach(function(repository){
      newRepository = new Repository(repository);
      userRepositoryArray.push(newRepository);
    });
    userRepositoryArray.forEach(function(repository){
      repositoryDisplayer(repository);
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
