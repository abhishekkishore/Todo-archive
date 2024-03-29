/**
 * Created by kishorab on 12/27/2016.
 */

angular.module('myApp', ['datatables','datatables.factory']).controller('myController', function ($scope, $location, $http, DTOptionsBuilder, DTColumnBuilder, DTColumnDefBuilder) {
    $scope.dtOptions = {
        "ajax": "./tasks.json",
        "paging": false,
        "bFilter": false,
        "ordering": false
    };
    $scope.dtColumns = [DTColumnBuilder.newColumn('').renderWith(function(data, type, full){
        return '<p><span class="glyphicon glyphicon-align-justify"/></p>';
        }).notSortable(),
        DTColumnBuilder.newColumn('description').renderWith(function(data, type, full){
            return '<p><span style="white-space: pre;">' + data +'</span></p>';
        }).notSortable()];
    $scope.moveToBox = function(){
        $scope.$apply();
    };
    $('#add-project-row').on('click', function(data){
        $('#add-project-table').hide();
        $('#add-project-name-table').show();
    });
    $('#remove-project-name-span').on('click', function (data) {
        $('#add-project-table').show();
        $('#add-project-name-table').hide();
    });
    $('#add-project-name-submit').on('click', function(data){
        var config = {
            headers:{
                'Content-Type':'application/json'
            }
        };
        var data = {
            'name': $('#add-project-name-text').val()
        };
        $http.post('./projects.json', data, config).then(function(response){
            alert(response);
        },
        function(error){
            alert(error);
        });
    });

}).directive("ddDraggable", Draggable).directive("ddDropTarget", DropTarget);