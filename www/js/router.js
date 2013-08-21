define(["backbone"], function () {
    var Router = Backbone.Router.extend({
        routes: {
            "": "index",
            "test": "test"
        },

        index: function () {
            console.log("This is the index page!");
        },

        test: function () {
            console.log("This is the test page!");
        }
    });

    return new Router;
});
