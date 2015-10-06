(function() {
  'use strict';

  angular
    .module('application', [
      'ui.router',
      'ngAnimate',

      'foundation',
      //'foundation.dynamicRouting',
      //'foundation.dynamicRouting.animations'

      // My modules
      'API',
      'SharedModule',
      'HomeModule',
      'ImageModule'
    ])
    .constant('apiUrl', 'http://foundapps.dev/backend/api')
    .config(config)
    .run(run);


  config.$inject = ['$urlRouterProvider', '$locationProvider'];
  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }


  function run() {
    FastClick.attach(document.body);
  }

})();
