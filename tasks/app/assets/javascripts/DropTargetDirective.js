/**
 * Created by kishorab on 11/17/2016.
 */

var DropTarget= function () {

    return {
        restrict: "A",
        link: function (scope, element, attributes, ctlr) {

            element.bind("dragover", function(eventObject){
                eventObject.preventDefault();
            });

            element.bind("drop", function(eventObject) {
                alert(eventObject.currentTarget.innerText);
                alert(eventObject.originalEvent.dataTransfer.getData("text"));

                // invoke controller/scope move method
                // scope.moveToBox(parseInt(eventObject.originalEvent.dataTransfer.getData("text")));

                // cancel actual UI element from dropping, since the angular will recreate a the UI element
                eventObject.preventDefault();
            });
        }
    };
}