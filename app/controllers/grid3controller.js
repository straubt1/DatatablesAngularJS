//
app.controller('grid3Contoller', ['$scope', '$resource', 'DTColumnBuilder', 'DTOptionsBuilder', 'DTColumnDefBuilder',
    function ($scope, $resource, DTColumnBuilder, DTOptionsBuilder, DTColumnDefBuilder) {
        $scope.dtInstance = {};
        $scope.dtOptions = {
            "ajax": "http://demo7783456.mockable.io/testdata",
            "language":
            {
                "emptyTable": "Nothing to Show!"
            },
            "responsive": true,
            "bLengthChange": false,
            "processing": true,
            "searching": false,
            "pageLength": 5,
            "bInfo": false,
            "order": [[0, "desc"]]
        };
        $scope.dtColumns = $resource('http://demo7783456.mockable.io/testcolumnsDT').query().$promise;

        $scope.ReRenderTable = function () {

           $scope.dtColumns = $resource('http://demo7783456.mockable.io/testcolumnsDTalt').query().$promise;
           $scope.dtInstance.DataTable.draw();
        };
    }]); 