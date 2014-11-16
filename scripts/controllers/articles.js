'use strict';

angular.module('sportslifeApp')
  .controller('ArticlesCtrl', function ($scope) {
  	$scope.articles = [
  	{title:"Working out is good", content:"Daily workouts increase wellbeing and longevity." +
  	"People live longer who do sports."},
  	{title:"The Perfect Body", content:"Want the perfect body? Working out every day will make " +
   "the girls chase after you."},
   {title:"Running is the ultimate", content:"Running s the ultimate sport to burn calories, " +
	"get the endorphins buzz and generally make you feel really good."}
  	];
  });
