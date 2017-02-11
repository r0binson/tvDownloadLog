/**
 * Created by robin on 12/3/2016.
 */
'use strict';
logApp.controller('indexController', ['$scope', 'showService','dateUtil', '$timeout',
  function (scope, showService, dateUtil, $timeout) {
    console.log("indexController --> initializations for page here");
    scope.tvShow = [];
    scope.dayOfWeek = dateUtil.getDayOfWeek(new Date());
    scope.message = "";
    scope.messageVisible = false;

    scope.$watch('showMessage', function() {
      console.log('Fist pass call');
      if(scope.showMessage === true){
        hideMessage(5000);
      }
    });

    console.log('messagVisible:', scope.messageVisible);

    refresh(scope.dayOfWeek);

    scope.refresh = function (dayOfWeek) {
      if(dayOfWeek === ""){

        console.log('empty dayofWeek');

        refresh(scope.dayOfWeek);
      } else {

        console.log('Non empty dayofWeek');

        refresh(dayOfWeek);
      }
    }

    scope.hideMessage = function () {
      var THREE_SEC = 3000;
      hideMessage(THREE_SEC);
    }

    scope.searchShows = function (keyEvent) {
      //keyEvent 13 == ENTER key
      if (keyEvent.which === 13) {
        if (isEmpty(scope.tvTitleSearch)) {
          scope.dayOfWeek = "all";
          refresh("all");
        } else {
          showService.getShowsByTitle(scope.tvTitleSearch).then(
            function (response) {
              scope.dayOfWeek = "all";
              scope.tvLogs = response.data;
              scope.tvTitleSearch = '';
            },
            function (error) {
              console.log('Search Show Error:', error);
            }
          );
        }
      }
    }

    function hideMessage(timeInSeconds) {
      $timeout(function(){
        scope.showMessage = false;
        scope.message="";
      }, timeInSeconds);

    }

    function refresh (dayOfWeek) {
      if ("all" === dayOfWeek) {
        showService.getShows().then(function (response) {
          scope.tvLogs = response.data;
        });
      } else {

        console.log('getShowsByDayOfWeek called');
        showService.getShowsByDayOfWeek(dayOfWeek).then(function (response) {
          scope.tvLogs = response.data;
        });
      }
    }

    function isEmpty (strObject){
      var empty = false;
      switch (strObject) {
        case undefined:
        case '':
        case null:
          empty = true;
          break;
      }
      return empty;
    }
  }
]);