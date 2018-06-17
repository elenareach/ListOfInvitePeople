 app.controller('myCtrl', function($scope, Name) {

    $scope.name = new Name();
    

    var refresh = function() {
      $scope.names = Name.query(); 
      $scope.name ="";
    }
    refresh();

    $scope.add = function(){
      $scope.email = "" + $scope.email;
      $scope.personInfo = $scope.firstName + " " + $scope.email;
      name = Object.assign({firstName:$scope.firstName, email:$scope.email}, name);
      Name.save(name,function(name){
            refresh();
         });
    }

    $scope.delete = function(name){
        name.$delete(function(){
            refresh();
        });
              
    }
    $scope.update = function(name){
        name.$update(function(){
            refresh();
        });
              
    }
    $scope.edit = function( id ){
       $scope.name = Name.get({ id : id});       
    }

});