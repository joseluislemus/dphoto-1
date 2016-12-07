angular.module('starter.services', [])

.factory('FileFactory', function($http) {
   var folders = [];
   var link = 'api/getPath.php';

   return {
        getParentDirectory: function(path) {
            return $http.post(link, {path : ".."}).then(function (res){
                folders = res.data;
                return folders;
            });
        },

        getEntriesAtRoot: function() {
            return $http.post(link, {path : "/"}).then(function (res){
                folders = res.data;
                return folders;
            });
        },

        getEntries: function(path) {
              return $http.post(link, {path : path}).then(function (res){
                folders = res.data;
                return folders;
            });
        }
    };
});
