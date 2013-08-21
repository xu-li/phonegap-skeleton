define(["platform", "router", "backbone.layoutmanager"], function (platform, router) {
    var app = {
        version: '0.0.1',
        platform: platform,

        setupLayoutManager: function () {
            // Localize or create a new JavaScript Template object.
            var JST = window.JST = window.JST || {};

            // setup layout manager
            Backbone.Layout.configure({
                // Allow LayoutManager to augment Backbone.View.prototype.
                manage: true,

                fetchTemplate: function(path) {
                    // Concatenate the file extension.
                    path = "js/templates/" + path + ".html";

                    // If cached, use the compiled template.
                    if (JST[path]) {
                        return JST[path];
                    }

                    // Put fetch into `async-mode`.
                    var done = this.async();

                    // Seek out the template asynchronously.
                    $.get(path, function(contents) {
                        done(JST[path] = _.template(contents));
                    });
                }
            });
        },

        setupRouter: function () {
            this.route = router;
        },

        run: function () {
            this.setupLayoutManager();
            this.setupRouter();

            Backbone.history.start({pushState: false});
        }
    };

    return app;
});
