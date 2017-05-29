App.controller('blogListController',['$scope','$stateParams','BlogService', function($scope,$stateParams,BlogService){
				
				console.log('blogListController:');
									
					$scope.bloglist = BlogService.query();
				
			}]);
			