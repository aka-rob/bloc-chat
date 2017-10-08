(function() {
  function ModalCtrl($scope, $uibModalInstance, Room) {

  $scope.ok = function() {
  	Room.add({roomName: $scope.room});
    $uibModalInstance.close();
  };

  $scope.cancel = function() {
    $uibModalInstance.close();
  };


};


  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$scope', '$uibModalInstance', 'Room', ModalCtrl]);
})();
