angular.module('starter.controllers', [])

.controller('ChatsCtrl', function($scope, Chats, FileFactory) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  //$scope.chats = Chats.all();
  
  $scope.chats = FileFactory.getEntriesAtRoot();
  
  $scope.getContents = function(path) {
            $scope.chats = FileFactory.getEntries(path);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
