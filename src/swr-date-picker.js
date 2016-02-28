/*global define*/
define( [
		'./properties',
		'./initialproperties',
		'text!./swr-date-picker.ng.html',
		'./lib/components/swr-date-picker/swr-date-picker'
	],
	function ( props, initProps, ngTemplate ) {
		'use strict';

		return {
			definition: props,
			initialProperties: {},
			snapshot: {canTakeSnapshot: false},
			template: ngTemplate,
			controller: ['$scope', function ( $scope ) {
				$scope.msg = 'Hello AngularJS';
			}]
		};
	} );
