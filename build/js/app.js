(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// var apiKey = require('./.env').apiKey;
var userRepositoriesArray = [];
var Repository = require('../js/repository.js').Repository;

exports.getAndDisplayRepos = function(userName, repositoryDisplayer){
  userRepositoriesArray = [];
  $('.output').empty();
  $.get('https://api.github.com/users/' + userName + '/repos').then(function(response){

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

  $.get('https://api.github.com/users/' + userName).then(function(response){
    console.log(response);
    userDisplayer(response);
  });

};

},{"../js/repository.js":2}],2:[function(require,module,exports){
exports.Repository = function(repository) {
  this.repositoryName = repository.name;
  if (repository.description === ""){
    this.repositoryDescription = "Description Not Available";
  } else {
    this.repositoryDescription = repository.description;
  }
  this.created_at = repository.created_at;
};

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{"../js/apiCall.js":1,"../js/repository.js":2,"../js/user.js":3}]},{},[4]);
