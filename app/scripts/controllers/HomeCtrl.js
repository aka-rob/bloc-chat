(function() {
  function HomeCtrl($scope, Room, $uibModal) {
    this.rooms = Room.all;

    this.open = function(size, template) {
      $uibModal.open({
          animation: true,
          templateUrl: 'templates/roomModal.html',
          controller: 'ModalCtrl',
          backdrop: 'static'
      });

    };

  };

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$scope', 'Room', '$uibModal', HomeCtrl]);
})();
