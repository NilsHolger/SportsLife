'use strict';

angular.module('sportslifeApp')
  .controller('UsersCtrl', function ($scope, $http, $modal) {

  		$http.get('users.json').success(function(data){
  			$scope.users = data;
  		});

  		$scope.gridOptions = {
  			data: 'users',
  			showGroupPanel: true,
  			enableCellSelection: true,
  			enableRowSelection: true,
  			enableCellEdit: true,
  			columnDefs: [
  			{field:'id', displayName:'Number'},
  			{field:'name', displayName:'Name'},
  			{field:'subscription', displayName:'Subscription'},
  			{field:'loyalty', displayName:'Loyalty Points'},
  			{field:'dateJoined', displayName:'Join Date'}
  			]
  		};

  		$scope.showModal = function(){
  			$scope.newUser = {};
  			var modalInstance = $modal.open({
  				templateUrl: 'views/addnewuser.html',
  				controller: 'AddUserNewCtrl',
  				resolve: {
  					newUser: function() {
  						return $scope.newUser;
  					}
  				}
  			});
  			modalInstance.result.then(function(selectedItem){
  				$scope.users.push({
  					id : $scope.users.length +1,
  					name: $scope.newUser.name,
  					loyalty: $scope.newUser.loyalty,
  					dateJoined: $scope.newUser.dateJoin,
  					subscription: $scope.newUser.subscription
  				});
  			});
  		};
  }).controller('AddUserNewCtrl', function($scope, $modalInstance, newUser){

  		$scope.newUser = newUser;
  		$scope.saveNewUser = function() {
  			$modalInstance.close(newUser);
  		};

  		$scope.cancel = function(){
  			$modalInstance.dismiss('cancel');
  		};
  });
