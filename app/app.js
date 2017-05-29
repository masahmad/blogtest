'use strict';

var App = angular.module('blogApp',['ui.router','ngResource']);

App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
				// For any unmatched url, send to /home
				$urlRouterProvider.otherwise("/home")
				
				$stateProvider
						.state('home', {
							url: '/home',
							template: 'This is the home page'
						})
						
						
						
						.state('create', {
							url: "/create",
							templateUrl: 'app/components/blogcreate/createblog.html',
							controller: 'blogCreateController'
						})
						
						
						
						
						
						.state('list', {
							url: "/list",
							views: {
								"" 	:    { templateUrl: "app/components/bloghome/bloghome.html" },
								//"view1@list": { templateUrl: "blogdetail.html",
									//controller: 'blogDetailController'
								//},
								"view1@list": { templateUrl: "app/components/bloglist/bloglisting.html" ,
									controller: 'blogListController'
								}
							}
						})
						
						
						
						
						.state('list.detail', {
							url: "/:blogidstate",
							views: {
								//"" 	:    { templateUrl: "bloghome.html" },
								"view2@list": { templateUrl: "app/components/blogdetail/blogdetail.html",
									controller: 'blogDetailController'
								}
							}
						})
						
						
						
			}]);

			
			
	
	

			
			App.factory('BlogService', function ($resource) {
    return $resource('http://localhost:8080/api/blogs/:id');  
	
});


			
			
			
	
			
			
			
			
			
			
			
			
			
			
			
	
									
									
			