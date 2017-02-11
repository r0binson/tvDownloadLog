logApp.factory('dateUtil',function(){
  function formatDate(date){
    var dateObject = {
      month: date.getMonth() + 1 ,
      day: date.getDate()<10?('0' + date.getDate()):date.getDate(),
      year: date.getFullYear()
    }
    return dateObject;
  }

  return {
    getDayOfWeek : function (date) {
      var day = date.getDay();
      var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return dayOfWeek[day];
    },
    
    getMySqlDateFormat: function (date) {
      var formattedDate = formatDate(date);
      return formattedDate.year + "/" + formattedDate.month + "/" + formattedDate.day;
    },

    getDisplayDate: function (date) {
      var formattedDate = formatDate(date);
      return formattedDate.month + "/" + formattedDate.day + "/" + formattedDate.year;
    }
  }
});
