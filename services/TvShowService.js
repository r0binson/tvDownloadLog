logApp.service('showService', ['$http' , function ($http) {
  var urlBase = '/logAnything/tvShows';

  this.newShow = function(tvShow){
    return $http.post(urlBase, tvShow);
  }

  this.getShows = function() {
    return $http.get(urlBase);
  }

  //this.getTodayShows = function(dayOfWeek) {
  //  return $http.get(urlBase + '/dayOfWeek/' + dayOfWeek);
  //}

  this.getShowsByDayOfWeek = function(dayOfWeek) {
    return $http.get(urlBase + '/dayOfWeek/' + dayOfWeek);
  }


  this.getShowsByTitle = function(tvTitle) {
    return $http.get(urlBase + "/title/" + tvTitle);
  }

  this.addNewEpisode = function(episode){
    return $http.post(urlBase + "/episodes", episode);
  }
}]);


//logApp.service('showService', ['$http' , function ($http) {
  //var shows = [];


  //return {
  //  saveShow: function (tvShow) {
  //    shows.unshift(tvShow);
  //  },
  //
  //  newShow: function (tvShow) {
  //    shows.unshift(tvShow);
  //    var defer = $q.defer();
  //    $http({method: 'POST', url: '/logAnything/tvShows', data: tvShow}).then(
  //      function(response){
  //        console.log('success:', response.data);
  //      },
  //      function(response){
  //        console.log('Error:', response);
  //      }
  //    )
  //
  //    //$http({method: 'POST', url: '/logAnything/tvShows', data: tvShow})
  //    //  .success(function (data, status, headers, config) {
  //    //    console.log(data, status, headers, config);
  //    //    response.resolve(tvShow);
  //    //  })
  //    //  .error(function (data, status, headers, config) {
  //    //    console.log(data, status, headers, config);
  //    //  });
  //
  //    return defer.promise;
  //  },
  //
  //  getShows: function () {
  //    console.log("shows:", shows)
  //    return shows;
  //  }
  //}
//}]);
