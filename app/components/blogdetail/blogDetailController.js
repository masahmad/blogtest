App.controller('blogDetailController',['$scope','$stateParams','BlogService',function($scope,$stateParams,BlogService){
				
				//console.log('blogDetailController:' + $stateParams.blogidstate)
				var idx=$stateParams.blogidstate;
				
				BlogService.query({id:idx}, function(data) {
					console.log(data[0])
					$scope.blogDetail = data[0];
					});
									
				
			}]);