angular.module("app", [])
	.directive("txt", function () {
		return {
			scope: {
				required: "=",
				model: "=",
				pattern: "=",
				formName: "=",
				elementName: "="
			},
			templateUrl: "app/txt.htm",
			controller: function ($scope) {
				//console.log($scope.$parent.form1);
				console.log($scope.$parent[$scope.formName][$scope.elementName]);
			}
		}
	})
	.controller("controller1", function ($scope) {
		$scope.formName = "form1";
		$scope.elementName = "elem1";
		$scope.elementName2 = "elem2";
		$scope.someValue = "someValue1";
		$scope.someValue2 = "someValue2";
		$scope.somePattern = /^\d+$/;
		console.log($scope);
		//$scope[$scope.formName][$scope.elementName].$setValidity($scope.elementName, false);
	})
;
