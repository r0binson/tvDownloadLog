logApp.controller('tvLogModalController', ['$scope', 'tvLogInfo', '$uibModalInstance','dateUtil', 'showService','refresh',
  function (scope, tvLogInfo, modalInstance, dateUtil, showService, refresh) {
    console.log('tvLogInfo Modal:', tvLogInfo);
    scope.tvLogInfo = angular.copy(tvLogInfo);

    var currentDate = new Date();
    scope.tvLogInfo.downloadDate = dateUtil.getMySqlDateFormat(currentDate);
    scope.tvLogInfo.latestEpisode = parseInt(scope.tvLogInfo.latestEpisode) + 1;

    scope.createEpisode = function (tvLogInfo) {
      var episode = {
        tvId: tvLogInfo.id,
        episodeNumber: tvLogInfo.latestEpisode,
        downloadDate: tvLogInfo.downloadDate
      }

      showService.addNewEpisode(episode).then(function(response){
        console.log("refresh", refresh);
        //refresh()(dateUtil.getDayOfWeek(new Date()));
        refresh()("");
      });

     modalInstance.close(scope.tvLogInfo);
    }

    scope.cancel = function () {
      modalInstance.dismiss();
    }
  }]);