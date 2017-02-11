/**
 * Created by robin on 12/3/2016.
 */
'use strict';
var logApp = angular.module('logApp', ['ui.bootstrap'])
  .constant('APP_CONSTANTS', {
    BASE_URL: '/cosrevinventoryws/rest'
  })
  .constant('ERROR_MESSAGE', {
    ERR_500: 'Connection refused. Please check if database server is up.',
    ERR_415: 'Unsupported Media Type. Please contact administrator.',
    GENERAL: 'General Error. Please contact administrator.'
  })
  .constant('MESSAGE',{
    NO_RESULTS_FOUND: 'No results found.'
  })
  .constant('MESSAGE_CODE',{
    NO_RESULTS_FOUND: 'NO_RESULTS_FOUND'
  });
