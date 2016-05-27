exports.Repository = function(repository) {
  this.repositoryName = repository.name;
  if (repository.description === ""){
    this.repositoryDescription = "Description Not Available";
  } else {
    this.repositoryDescription = repository.description;
  }
  this.created_at = repository.created_at;
};
