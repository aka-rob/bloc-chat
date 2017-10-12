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
      var date = new Date();
      var dd = date.getDate();
      var mm = date.getMonth() + 1;
      var yyyy = date.getFullYear();

      if (dd < 10) {
        dd = '0' + dd;
      };

      if (mm < 10) {
        mm = '0' + mm;
      };

      $scope.today = mm + '/' + dd + '/' + yyyy;

      Message.send({
        content: $scope.content,
        roomId: $scope.roomId,
        sentAt: $scope.today,
        username: $cookies.get('blocChatCurrentUser')
      });
      $scope.content = '';
    };

    $('form').submit(function(event){
        $scope.sendMessage();
    });

  };



  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$scope', '$cookies', 'Room', 'Message', '$uibModal', HomeCtrl]);
})();
