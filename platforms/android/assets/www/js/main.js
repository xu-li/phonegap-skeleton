require.config({
    deps: ["app"],
    paths: {
        "phonegap": "../phonegap",
        "lodash": "libs/lodash-1.3.1",
        "jquery": "libs/jquery-2.0.3",
        "backbone": "libs/backbone-1.0.0"
    },

    shim: {
        "backbone": {
            deps: ["jquery", "lodash"],
            exports: "Backbone"
        },

        "lodash": {
            exports: "_"
        }
    }
});

alert(location.href);
