/*global define*/
define( [
		'jquery',
		'qvangular',
		'text!./swr-date-picker.ng.html',
		'./../../external/sense-extension-utils/extUtils',
		'!text!./../../external/bootstrap-datepicker/bootstrap-datepicker3.standalone.min.css',

		'./../../external/bootstrap-datepicker/bootstrap-datepicker'

	],
	function ( $, qvangular, ngTemplate, extUtils, datePickerCSS ) {

		extUtils.addStyleToHeader( datePickerCSS, 'bootstrap-datepicker-wrapper' );

		qvangular.directive( 'bootstrapDatepickerWrapper', function () {
			return {
				restrict: 'E',
				replace: true,
				template: ngTemplate,
				controller: ['$scope', function ( scope ) {

				}],
				link: function ( $scope, $element, $attrs ) {

					$element.bind('click', function () {
						angular.element( $element ).datepicker();
					});


				}
			}
		} );
	} );
