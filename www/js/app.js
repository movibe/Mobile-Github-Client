// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('MobGit', ['ionic', 'state', 'controller', 'factory', 'hljs'])

.run(function($ionicPlatform, $rootScope, $state, $ionicPopup) {

	$ionicPlatform.ready(function() {
		// var type = $cordovaNetwork.getNetwork();
		// var isOnline = $cordovaNetwork.isOnline();
		// var isOffline = $cordovaNetwork.isOffline();

		// console.log(type, isOnline, isOffline)

		if (window.OAuth) {
			OAuth.initialize('DhJ5nGr1cd7KBlGv47FUpYq5goo');
			OAuth.popup('github', {
				cache: true
			})
			.done(function (result) {
				result.me()
				.done(function (user_info) {
					console.log(user_info)
					if(user_info.name) {
						$rootScope.authname = user_info.name;
						$rootScope.authlogin = user_info.alias;
					} else {
						$rootScope.authname = user_info.alias;
						$rootScope.authlogin = user_info.alias;
					}
      	})
				.fail(function (error) {
					console.log(error)
				})
				console.log('accesstoken' + result.access_token)
				$rootScope.access_token = result.access_token;
			})
			.fail(function (error) {
				$state.go('info')
			})
		}

		if(window.StatusBar) {
			StatusBar.styleDefault();
		}
	})
})
