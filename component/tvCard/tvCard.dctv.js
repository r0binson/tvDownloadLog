/**
 * Created by robin on 12/19/2016.
 */
logApp.directive('tvCard', function () {
  return {
    restrict: 'E',
    templateUrl: 'component/tvCard/tvCard.html',
    scope: {
      tvLogInfo: "=info",
      refresh: "&"
    },
    controller: ['$scope', '$uibModal', 'showService',
      function (scope, uibModal) {
        scope.editCard = function () {
          var modalInstance = uibModal.open({
            templateUrl: 'component/tvCard/tvCardModalTemplate.html',
            controller: 'tvLogModalController',
            resolve: {
              tvLogInfo: function () {
                return scope.tvLogInfo;
              },
              refresh: function(){
                return scope.refresh;
              }
            }
          });

          modalInstance.result.then(
            function (tvLogInfo) {
              // do nothing.
            },
            function () {
              console.log('Modal is closed with no action.');
            }
          );
        }
      }]
  };
});