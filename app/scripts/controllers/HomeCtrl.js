(function() {
  function HomeCtrl($scope, Room) {
    this.rooms = Room.all;

    this.addRoom = Room.add({room: "'" + $scope.newRoom + "'" });

  };

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$scope', 'Room', HomeCtrl]);
})();
