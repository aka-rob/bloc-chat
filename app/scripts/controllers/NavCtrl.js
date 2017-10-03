(function() {
  function NavCtrl(Room) {
    this.rooms = Room.all;
  };

  angular
    .module('blocChat')
    .controller('NavCtrl', ['Room', NavCtrl]);
})();
