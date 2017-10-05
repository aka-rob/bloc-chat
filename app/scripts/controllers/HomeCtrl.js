(function() {
  function HomeCtrl($scope, Room) {
    this.rooms = Room.all;

    console.log(this.rooms);

    this.addRoom = function() {
      Room.add({$value: $scope.room});
    };

  };

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$scope', 'Room', HomeCtrl]);
})();
