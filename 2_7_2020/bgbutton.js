$(document).ready(function () {
    $("#bg").click(function () {
        if ($("#bg").prop('checked')) {
            alert('Change background color to coral!');
            $("body").css({ "background-color": "coral" });
        } else {
            $("body").css({ "background-color": "white" });
        }
    });
});

