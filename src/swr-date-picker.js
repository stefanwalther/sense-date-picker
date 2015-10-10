/*global define*/
'use strict';
define( [
    './initial-properties',
    './properties',
    'text!./swr-date-picker.ng.html'
  ],
  function ( initProps, props, ngTemplate ) {
    'use strict';

    return {
      definition: props,
      initialProperties: initProps,
      snapshot: {canTakeSnapshot: true},
      template: ngTemplate,
      controller: ['$scope', function ( $scope ) {
        $scope.msg = 'Hello AngularJS';
      }]
    };
  } );
