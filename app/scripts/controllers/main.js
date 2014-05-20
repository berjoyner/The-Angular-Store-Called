'use strict';

var JerkApp = angular.module('JerkApp', []);

  JerkApp.controller('JerkMainCtrl', function ($scope) {

  $scope.jerkFaces = [

  {'name': 'Jerry',
  'thumb': 'images/jerry.jpg',
  'preview': 'I dont wanna be a pirate.',
  'description': 'Little Jerry',
  'image': 'images/jerry.jpg',
  'price':'500',
  'id':'a',
  },
  {'name': 'Elaine',
  'thumb': 'images/elaine.jpeg',
  'preview': 'Get Out!',
  'description': 'Get Out!',
  'image': 'images/elaine.jpeg',
  'price':'450',
  'id':'b',
  },
  {'name': 'George',
  'thumb': 'images/george.jpg',
  'preview': 'I am Koko',
  'description': 'Koko',
  'image': 'images/george.jpg',
  'price':'400',
  'id':'c',
  },
  {'name': 'Newman',
  'thumb': 'images/newman.jpg',
  'preview': 'Hello Jerry.',
  'description': 'Hello Jerry.',
  'image': 'images/newman.png',
  'price':'350',
  'id':'d',
  },
  {'name': 'Kramer',
  'thumb': 'images/kramer.jpg',
  'preview': 'Kramerica, Giddy Up!',
  'description': 'Kramerica',
  'image': 'images/kramer.jpg',
  'price':'300',
  'id':'e',
  },
  {'name': 'Puddy',
  'thumb': 'images/puddy.jpg',
  'preview': 'This is Puddy.',
  'description': 'This is Puddy.',
  'image': 'images/puddy.png',
  'price':'350',
  'id':'f'
  }
  ];

   $scope.addJerkFaces = function(item){
    	$scope.jerkFaces.push(item);

    }
  });




