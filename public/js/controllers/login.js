
angular
  .module('innovaID')
  .controller('loginCtrl', ['$scope', '$state', function($scope,
      $state ) {
    $scope.doLogin=function(){
        $state.go('home');
    }
  }]);