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
}).directive("ddDraggable", Draggable).directive("ddDropTarget", DropTarget);