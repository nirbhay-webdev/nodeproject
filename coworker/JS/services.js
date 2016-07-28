angular.module('cwrk',['ngRoute']).service('cwrkBackend',function(){
    this.login=function(user)
    {
        //login the user
    };

    this.signUp=function(user)
    {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
    };


})