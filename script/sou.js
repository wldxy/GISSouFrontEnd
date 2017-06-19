var map;
var markers;

function ShowDetails(value) {
    // console.log("hahah");
    console.log(value);
    google.maps.event.trigger(marker, "click");
}

function ShowSearch(items) {
    console.log("hahah");
    $("#detail").addClass("active");

    for (var i = 0;i < items.length;i++) {
        var _li = "<li onclick=\"ShowDetails(this.value)\" value="+
            i.toString()+
            "><div>"+
            items[i].toString()+
            "</div></li>"
        $("#detail_ul").append(_li);
    }

    for (var i = 0;i < items.length;i++) {
        
    }
}

$(document).ready(function(){
    $('#poi').bind("keypress", function(event) {
        if (event.keyCode == "13") {
            console.log("event 2");
            var code = $("#poiinput").val();
            ShowSearch([{a: 1}, {a: 2}]);
        }
    });

    $('#event').bind("keypress", function(event) {
        if (event.keyCode == "13") {
            console.log("event 1");
            var code = $("#eventinput").val();
            ShowSearch([{a: 1}, {a: 2}]);
        }
    });

});