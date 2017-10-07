(function() {
  function HomeCtrl($scope, Room, Message, $uibModal) {
    $scope.rooms = Room.all;
    // this.messages = Message.all;

    $scope.open = function(size, template) {
      $uibModal.open({
          animation: true,
          templateUrl: 'templates/roomModal.html',
          controller: 'ModalCtrl',
          backdrop: 'static'
      });
    };

    $scope.getByRoomId = function(roomId) {
      $scope.messages = Message.getByRoomId(roomId);
    }
  };

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$scope', 'Room', 'Message', '$uibModal', HomeCtrl]);
})();
