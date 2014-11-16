'use strict';

angular.module('sportslifeApp')
  .controller('GalleryCtrl', function ($scope) {

  	$scope.rate = 0;
  	$scope.maximum = 10;
  	$scope.readOnly = false;

  	var pictures = $scope.pictures = [];
  	var bUrl = "http://lorempixel.com/300/180/";

  	var titles = ["Looking Sexy", "Dance and Move", "Fit to kill", "Keep on Moving",
  					"Too Sexy for this shirt", "Bright Shine"];
  	var keyWords = ["fashion", "nightlife", "business", "transport", "people", "city"];

  	var loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat magna eget dolor bibendum, et consequat nisi bibendum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean tempor cursus laoreet. Cras vel maximus mauris. Ut posuere malesuada mi, ac efficitur velit viverra sit amet. Nulla tempor vel lorem eu consequat. Maecenas vel metus non turpis rutrum consectetur. Mauris convallis vel sapien ullamcorper finibus. Praesent in interdum sem. Nulla lorem augue, mollis nec eleifend non, dictum vitae augue.";


  	$scope.addPicture = function(i){
  		pictures.push({
  			url: bUrl+keyWords[i],
  			title: titles[i],
  			summary: loremText
  		});
  	};

  	for (var i = 0; i < 6; i++){
  		$scope.addPicture(i);
  	}


  });
