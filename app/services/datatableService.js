app.factory('datatableService', ['$http', '$q', function ($http, $q) {
    var dataServiceFactory = {};

    dataServiceFactory.getDataColumns = function () {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://demo7783456.mockable.io/testDatatable'
        }).success(function (response) {
            deferred.resolve(response);
        }).error(function (message) {
            deferred.reject(message);
        });
        return deferred.promise;
    }

    dataServiceFactory.get = function (force, status) {
        var deferred = $q.defer();
        $http({
            method: 'http://demo7783456.mockable.io/testdata',
            url: endpoint
        }).success(function (response) {
            deferred.resolve(response);
        }).error(function (message) {
            deferred.reject(message);
        });

        return deferred.promise;
    }

    dataServiceFactory.getColumns = function (force, status) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://demo7783456.mockable.io/testcolumns'
        }).success(function (response) {
            deferred.resolve(response);
        }).error(function (message) {
            deferred.reject(message);
        });
        return deferred.promise;
    }

    return dataServiceFactory;
}
]);