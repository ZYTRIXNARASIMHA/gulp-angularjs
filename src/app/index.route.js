(function() {
  'use strict';

  angular
    .module('myGulpProject')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('base',{
          views: {
              'header': {
                   controller: 'HeaderController',
                   controllerAs: 'main',
                   templateUrl: 'app/header/header.html'
              },
              'content': {
                template:'<div ui-view></div>'
              },
              'footer': {
                  controller: 'FooterController',
                  templateUrl: 'app/footer/footer.html'
              }
          }
      })
      .state('base.home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('base.aboutus', {
        url: '/aboutus',
        templateUrl: 'app/aboutus/aboutus.html',
        controller: 'AboutusController'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
