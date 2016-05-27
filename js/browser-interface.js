var userName;
var getRepos = require('../js/apiCall.js').getRepos;

$(document).ready(function(){
  $('#userInput').submit(function(event){
    event.preventDefault();
    userName = $('#userName').val();
    getRepos(userName);
  });
});
