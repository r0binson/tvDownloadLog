/**
 * Created by robin on 2/2/2017.
 */
logApp.directive('dayOfWeek', ['showService', function (showService) {
  return {
    restrict: 'E',
    templateUrl: 'component/dayOfWeek/dayOfWeek.html',
    scope: {
      dayOfWeek: "=dow",
      refresh: "&"
    },
    link: function (scope, element, attr) {
      scope.isActive = function (dayOfWeek) {
        scope.dayOfWeek = dayOfWeek;
        scope.refresh({dayOfWeek: dayOfWeek});
      }
    }
  }
}]);