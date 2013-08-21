require(["app"], function (app) {

    // setup JQM
    $(document).on("mobileinit", function(){
        $.extend($.mobile, {
            linkBindingEnabled: false,
            pushStateEnabled: false,
            hashListeningEnabled: false
        });
    });

    // load jquery mobile and phonegap
    if (app.platform === "web") {
        require(["jquery.mobile"], function () {
            app.run();
        });
    } else {
        require(["jquery.mobile", "phonegap"], function () {
            $(document).on("deviceready", function () {
                app.run();
            });
        });
    }
});
