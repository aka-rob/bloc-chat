(function() {
  function UsernameCtrl($scope, $cookies, $uibModalInstance) {

  $scope.setUsername = function() {
    $cookies.put('blocChatCurrentUser', $scope.blocChatCurrentUser);

    if($scope.blocChatCurrentUser) {
      $uibModalInstance.close();
    }
  };

};


  angular
    .module('blocChat')
    .controller('UsernameCtrl', ['$scope', '$cookies', '$uibModalInstance', UsernameCtrl]);
})();
