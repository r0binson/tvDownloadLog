/**
 * Created by robin on 12/19/2016.
 */
logApp.directive('createForm', ['showService', 'dateUtil', function (showService, dateUtil) {
  return {
    restrict: 'E',
    templateUrl: 'component/createForm/createForm.html',
    scope: {
      tvShow: '<',
      message: '=',
      showMessage: '=',
      refresh: "&"
    },
    link: function (scope, element, attr) {
      var tvShow = scope.tvShow;
      scope.show = false;

      scope.showDetails = function () {
        scope.show = true;
      }

      scope.save = function () {
        var tvShowLog = {
          title: tvShow.title,
          latestEpisode: tvShow.latestEpisode,
          dayOfWeek: tvShow.dayOfWeek,
          downloadDate: tvShow.downloadDate
        }

        showService.newShow(tvShowLog).then(function(response){
          scope.showMessage = true;
          scope.message = response.data.message;
          scope.refresh()(tvShowLog.dayOfWeek);

          //TODO: Show some display here of the response
        }, function(error){
          alert(error.message);
          //TODO: Show error response
          console.log('error:', error);
          console.log('error message:', error.message)
        });
        resetForm();
      }

      scope.cancel = function () {
        resetForm();
      }

      scope.initializeDefaultFields = function () {
        var dateToday = new Date();
        tvShow.dayOfWeek = dateUtil.getDayOfWeek(dateToday);
        tvShow.downloadDate = dateUtil.getMySqlDateFormat(dateToday);
        tvShow.downloadDateDisplay = dateUtil.getDisplayDate(dateToday);
      }

      function resetForm() {
        tvShow.title = ""
        tvShow.latestEpisode = "";
        tvShow.downloadDate = "";
        tvShow.downloadDateDisplay = "";
        tvShow.dayOfWeek = "";
        scope.show = false;
      }
    }
  };
}
]);