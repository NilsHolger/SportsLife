'use strict';

angular.module('sportslifeApp')
  .controller('MainCtrl', function ($scope) {
    	
  		var bUrl = 'http://lorempixel.com/960/450/';
  		$scope.interval = 4000;

  		$scope.slides = [
  		{title:'Sports for Fitness', image: bUrl+'sports/', text:'Do sports 1 hour a day!'},
  		{title:'Sports perfect Body', image: bUrl+'technics/', text:'Maintain a perfect figure.'},
  		{title:'Sports for Wellbeing', image: bUrl+'food/', text:'Increase quality of life!'}
  		];

  		var bUrl200 = 'http://lorempixel.com/200/200/';
  		$scope.threeBlocks = [
  		{img: bUrl200+'animals', title:'Sports Crazy', summary:'Love to do sports!'},
  		{img: bUrl200+'cats', title:'Sports is Good', summary:'Keep on moving...'},
  		{img: bUrl200+'nature', title:'Fresh Air', summary:'Great for good health.'},
  		];

  });
