angular.module('starter.controllers', [])

.controller('ChatsCtrl', function($scope, Chats, fileFactory) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.chats = Chats.all();
  /*var fs = new fileFactory();
  fs.getEntriesAtRoot().then(function(result) {
            $scope.chats = result;
        }, function(error) {
            console.error(error);
        });
 
  $scope.getContents = function(path) {
            fs.getEntries(path).then(function(result) {
                $scope.chats = result;
                $scope.chats.unshift({name: "[parent]"});
                fs.getParentDirectory(path).then(function(result) {
                    result.name = "[parent]";
                    $scope.chats[0] = result;
                });
            });
  };*/
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
