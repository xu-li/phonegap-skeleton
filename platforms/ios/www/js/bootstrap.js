require(["app", "platform"], function (app, platform) {

    // setup JQM
    $(document).on("mobileinit", function(){
        $.extend($.mobile, {
        });
    });

    // load jquery mobile and phonegap
    if (platform === "web") {
        require(["jquery.mobile"], function () {
            // start application
            alert("All loaded!");
        });
    } else {
        require(["jquery.mobile", "phonegap"], function () {
            $(document).on("deviceready", function () {
                // start application
                alert("All loaded!");
            });
        });
    }
});
