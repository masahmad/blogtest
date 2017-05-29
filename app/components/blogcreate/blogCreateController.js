		App.controller('blogCreateController',['$scope','$stateParams','$state','BlogService', function($scope,$stateParams, $state,BlogService){
				console.log('blogCreate controller');
				
				$scope.saveBlog = function() {
					
				  BlogService.save({heading:$scope.heading, blogcontent:$scope.blogcontent,tags:$scope.tags}, function(data) {
					console.log(data)
					$state.go('list')
					});
				  
				}
			
			}]);