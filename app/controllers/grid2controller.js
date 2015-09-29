//
app.controller('grid2Contoller', ['$scope','DTColumnBuilder', 'DTOptionsBuilder', 'DTColumnDefBuilder', 
function ($scope, DTColumnBuilder, DTOptionsBuilder, DTColumnDefBuilder) {
	var vm = this;
    vm.dtInstance2 = {};
    $scope.dtInstance={};
        $scope.dtOptions = {
            "responsive": true,
            "bLengthChange": false,
            "processing": true,
            "searching": false,
            "pageLength": 5,
            "bInfo": false,
            "language": {
                "emptyTable": "Nothing to Show!"
            },
            "order": [[0, "desc"]]
            //"ajax": {
            //    "url": "/AuditGroup/AuditGroups"
            //},
            //"fnPromise": groupService.getAllGroups,
            //"fnDrawCallback": function (oSettings) {
            //    var pgr = $(oSettings.nTableWrapper).find('.dataTables_paginate');
            //    if (oSettings._iDisplayLength == -1 || oSettings._iDisplayLength >= oSettings.fnRecordsDisplay()) {
            //        pgr.hide();
            //    } else {
            //        pgr.show();
            //    }
            //}
        //     ,aoColumnDefs: [
        // {
        //     aTargets: 0,
        //     bSortable: false
        // }]
        };
        $scope.dtColumns = [
          DTColumnBuilder.newColumn('id')
               .withTitle('Owner Name')
               .renderWith(function (data, type, full, meta) {
                   return '<a href="#/Owners/Details/' + full.Id + '">' + data + '</a>';
               }),
          DTColumnBuilder.newColumn('name')
               .withClass('dt-body-center')
               .withTitle('Groups')
               .withOption('width', '20%'),
          DTColumnBuilder.newColumn('type')
               .withClass('dt-body-center')
               .withTitle('Not Complete Audits')
               .withOption('width', '20%')
        ];

$scope.updateTable =  function reloadData() {
        
    };
}]); 