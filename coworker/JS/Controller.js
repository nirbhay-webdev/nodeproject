angular.module('cwrk',['ngRoute']).controller('cwrkCtrl',['cwrkBackend','$scope',function(cwrkBackend,$scope){
     $scope.user={};
     $scope.showDefaultApplicationLoader=false;
    

 


}]);

angular.module('cwrk',['ngRoute']).controller('hdrCtrl',['cwrkBackend','$location','$scope',function(cwrkBackend,$location,$scope){
    //function does nothing till now
    $scope.user={}
    $scope.init=function(){
        //Login functionality
        $scope.loginValue=false;
        $scope.showLoginButtons=true;
        $scope.showFields=false;
        $scope.showDefaultApplicationLoader=false;
    }
    $scope.switchPanes=function(){
        console.log('this function was called'+$scope.showFields+$scope.loginValue);
        $scope.loginValue=!$scope.loginValue;
        $scope.showFields=$scope.loginValue;
        $scope.showLoginButtons=!$scope.loginValue;   
        console.log('this function was called'+$scope.showFields+$scope.loginValue);   
    }
     $scope.routerFromHeader=function(route){
         console.log('calling this function')
         $location.path(route);
         
     }

    $scope.userSignUp=function(){
     
     console.log('User Signing Up');
     $scope.showDefaultApplicationLoader=false;
     $scope.showFields=false;
    //  cwrkBackend.signUp($scope.user);  
     $scope.routerFromHeader('/home');
    }
   
}]);