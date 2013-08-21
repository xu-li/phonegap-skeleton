require.config({
    deps: ["bootstrap"],
    paths: {
        "phonegap": "../phonegap",
        "lodash": "libs/lodash-1.3.1",
        "jquery": "libs/jquery-1.9.1",
        "jquery.mobile": "libs/jquery.mobile-1.3.2",
        "backbone": "libs/backbone-1.0.0"
    },

    shim: {
        "lodash": {
            exports: "_"
        },

        "backbone": {
            deps: ["jquery", "lodash"],
            exports: "Backbone"
        },

        "jquery.mobile": {
            deps: ["jquery"]
        }
    }
});
