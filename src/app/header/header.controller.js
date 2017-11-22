(function() {
  'use strict';

  angular
    .module('myGulpProject')
    .controller('HeaderController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;
    vm.creationDate = 1511171702061;
    
  }
})();
