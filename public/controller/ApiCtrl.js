var fs = require("fs");

senkonekta.controller('ApiCtrl',['$scope','$http',function ($scope,$http){
	$http({method: 'GET', url: 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDr4-FdduVY3Pf1lfBG7enJDajOHSlJg44'}).
    success(function(data, status, headers, config) {
    	console.log({data:data});
    	$scope.fonts = {data:data.items};
    }).
    error(function(data, status, headers, config) {
    	$scope.fonts = 'Error';
    });
}]);