(function() {
  function HomeCtrl($scope, $cookies, Room, Message, $uibModal) {
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
      $scope.roomId = roomId;
    };

    $scope.sendMessage = function() {
      if ($scope.content && $scope.roomId) {
        Message.send({
          content: $scope.content,
          roomId: $scope.roomId,
          sentAt: firebase.database.ServerValue.TIMESTAMP,
          username: $cookies.get('blocChatCurrentUser')
        });

        $scope.content = '';
      };
    }

  };



  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$scope', '$cookies', 'Room', 'Message', '$uibModal', HomeCtrl]);
})();
