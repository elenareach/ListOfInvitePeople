var app = angular.module('myApp', ['ngResource']);

// Create a resource factory to access names table from database 
app.factory('Name', function($resource) {
    return $resource('/api/names/:id', { id: '@_id' }, {
        update: { // We need to define this method manually as it is not provided with ng-resource
        method: 'PUT'
      }
    });
});