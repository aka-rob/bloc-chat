(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {

        $uibModal.open({
            animation: true,
            templateUrl: 'templates/usernameModal.html',
            controller: 'UsernameCtrl',
            backdrop: 'static'
        });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
