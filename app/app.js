angular.module("app", [])
.directive("txt", function() {
    return {
	scope: {
	    required: "="
	},
	templateUrl: "app/txt.htm",
	controller: function($scope) {
	}
    }
})
.controller("controller1", function($scope) {
    $scope.formName = "form1";
    $scope.elementName = "elem1";
    console.log($scope.form1);
})
;