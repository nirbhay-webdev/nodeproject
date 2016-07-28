
var app=angular.module('cowork',['ngRoute']);

app. config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      

      $routeProvider.
        when('/', {
          templateUrl: 'Views/homepage.html'
        }).
        when('/home', {
          templateUrl: 'Views/home.html'
        }).
        otherwise('/');
    }
  ]);

app.service('cwrkBackend',function(){

    this.userAuth = function(user) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
     });
    }
    });



app.controller('coworkController',['$scope','$rootScope','$location','cwrkBackend',function($scope,$rootScope,$location,cwrkBackend){
    $rootScope.atHome=true;
    $rootScope.atSignUp=false;
    
    $scope.user = {};
    $scope.state='Booking';

    $scope.init= function () {
    
    $scope.state='Booking';

    }
    
    $scope.signUp= function() {
        
        console.log('one step before cwrkBackend service being called');
        $scope.test=cwrkBackend.userAuth($scope.user);
        $rootScope.atSignUp=false;
        $location.path('/home');
        $scope.viewStates.profile=true;

    }

    // $scope.viewStates ={
    //     'profile':false,
    //     'booking':false,
    //     'team':false,
    //     'invoices':false,
    //     'payments':false
    // }

    // $scope.changeViewStates= function(view) {
        
    // $scope.viewStates =[
    //     'profile':false,
    //     'booking':false,
    //     'team':false,
    //     'invoices':false,
    //     'payments':false
    // ];

    // $scope.viewStates.view=true;
    // }

   
    
}]);

app.controller('calendarController',['$scope','$rootScope',function($scope,$rootScope){
    $scope.year=['January','February','March','April','May','June','July','August','September','October','November','December'];
    $scope.month={'value':null,'date':[[]],'month':null};

    var monthBuilder = function(month) {
        var year= [31,28,31,30,31,30,31,31,30,31,30,31];
        var monthbuild =[];
        var date=new Date(2016,month,1);
        var actualDay=date.getDay()-1;
        
        var counter=1-actualDay;
        var month=date.getMonth();
        var counterMax=year[month];

        for (var week=0;week<5; week++){
                            monthbuild[week]=[];
                                for (var day=0;day<7;day++){
                                        if (counter>0 && counter<=counterMax){
                                          monthbuild[week][day]=counter;
                                        }
                                        else {monthbuild[week][day]=null} 
                                          counter=counter+1;
                
                }
        }
        return {'value':$scope.year[month],'date':monthbuild,'month':month};
    }

    $scope.create= function(){
        var date=new Date();
        var month=date.getMonth();
        $scope.month=monthBuilder(month);
    }

    $scope.monthChange=function (direction){
        console.log('calling this function');
        $scope.month = monthBuilder($scope.month.month+direction);
    }


}]);



app.controller('coworkHeaderController',['$scope','$location','$rootScope','cwrkBackend',function($scope,$location,$rootScope,cwrkBackend){
    $scope.user={};
    
    $scope.initiator=function(){
        $scope.loginPressed=false;
        $scope.user = {'userName':null,'password':null};
    };

    $scope.loginuser = function () {
        console.log('this function has finally initiated');
                       if ($scope.loginPressed ==   true) {
                           if ($scope.user.userName !== null && $scope.user.password !== null){
                                 console.log('setting the home url');   
                                 $rootScope.atHome=false;

                                 $location.path('/home');
                                 $scope.loginPressed=false;
                           }
                           else console.log('user forgot to add usrnam/paswd'); 
                            }
                        else if ($scope.loginPressed == false){
                                console.log('waiting for the user to fill the information');
                                $scope.loginPressed=true;
                            }
    };

    $scope.showSignUpForn=function() {
        $rootScope.atSignUp=!$rootScope.atSignUp;
    }
 
}]);