angular.module('starter.services', [])

.factory("FileFactory", function($q) {

   var files = [{   
    id: 0,
    name: '..',
    isDirectory: true,
    isFile: false
            },{
                id: 0,
                name: 'Ben Sparrow',
                isDirectory: true,
                isFile: false
            }, {
                id: 0,
                name: 'Foto',
                isDirectory: false,
                isFile: true
            }, {
                id: 0,
                name: 'Ben Sparrow',
                isDirectory: true,
                isFile: false
            }, {
                id: 0,
                name: 'Ben Sparrow',
                isDirectory: true,
                isFile: false
            }, {
                id: 0,
                name: 'Ben Sparrow',
                isDirectory: true,
                isFile: false
            }, {
                id: 0,
                name: 'Ben Sparrow',
                isDirectory: true,
                isFile: false
            } ];
 var files2 = [{   
    id: 0,
    name: '..',
    isDirectory: true,
    isFile: false
            },{   
    id: 0,
    name: 'Otros',
    isDirectory: true,
    isFile: false
            }];
   return {
        getParentDirectory: function(path) {
            return files;
        },

        getEntriesAtRoot: function() {
           return files;
        },

        getEntries: function(path) {
            if(path == "..") return files 
             else return files2;
        }

    };
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
