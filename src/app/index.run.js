(function() {
  'use strict';

  angular
    .module('myGulpProject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
