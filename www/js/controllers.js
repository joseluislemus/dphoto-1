angular.module('starter.controllers', [])

.controller('FoldersCtrl', function($scope, $rootScope, FileFactory, $http) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  FileFactory.getEntriesAtRoot().then(function(result){
    $scope.folders = result;  
  });
  
  $rootScope.path = "/"
  $rootScope.random = true;
  $rootScope.fullScreen = true;
  $rootScope.time = 30;
  
  $scope.getContents = function(path) {
            if(path == ".."){
               var dirs = $rootScope.path.split('/');
               $rootScope.path = $rootScope.path.replace(dirs[dirs.length-2],'').replace('//','/');
            }
            else
                $rootScope.path = $rootScope.path + path  + "/";
              FileFactory.getEntries($rootScope.path).then(function(result){
                  $scope.folders = result;  
              });
  };

  $scope.doSlideShow = function(path){
        var link = 'api/sendFolder.php';
        $http.post(link, {path : $rootScope.path, time: $rootScope.time, random: $rootScope.random , fullScreen: $rootScope.fullScreen}).then(function (res){
            $scope.response = res.data;
        });
    };
})

.controller('SettingsCtrl', function($scope, $rootScope, $http) {
  $scope.settings = {
    random: $rootScope.random ,
    fullScreen : $rootScope.fullScreen, 
    time: $rootScope.time
  };

  $scope.settingsChange = function() {
    $rootScope.random = $scope.settings.random;
    $rootScope.fullScreen = $scope.settings.fullScreen;
    $rootScope.time = $scope.settings.time;
  }

   $scope.doSlideShow = function(path){
        var link = 'api/sendFolder.php';
        $http.post(link, {path : $rootScope.path, time: $rootScope.time, random: $rootScope.random , fullScreen: $rootScope.fullScreen}).then(function (res){
            $scope.response = res.data;
        });
    };
});
