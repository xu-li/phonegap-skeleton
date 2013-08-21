require.config({
    deps: ["bootstrap"],
    paths: {
        "phonegap": "../phonegap",
        "underscore": "libs/underscore-1.5.1",
        "jquery": "libs/jquery-1.9.1",
        "jquery.mobile": "libs/jquery.mobile-1.3.2",
        "backbone": "libs/backbone-1.0.0",
        "backbone.layoutmanager": "libs/backbone.layoutmanager-0.9.1"
    },

    shim: {
        "underscore": {
            exports: "_"
        },

        "backbone": {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        },

        "backbone.layoutmanager": {
            deps: ["backbone"],
            exports: "Backbone.Layout"
        },

        "jquery.mobile": {
            deps: ["jquery"]
        }
    }
});
