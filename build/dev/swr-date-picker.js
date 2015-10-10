/*global define*/
define( [
		'./properties',
		'text!./swr-date-picker.ng.html'
	],
	function ( props, ngTemplate ) {
		'use strict';

		return {
			definition: {},
			initialProperties: {},
			snapshot: {canTakeSnapshot: false},
			template: ngTemplate,
			controller: ['$scope', function ( $scope ) {
				$scope.msg = 'Hello AngularJS';
			}]
		};
	} );
