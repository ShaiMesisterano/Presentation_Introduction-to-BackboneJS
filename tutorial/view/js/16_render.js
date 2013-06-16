var App = {
    Model: {},
    View: {},
    Collection: {}
}

App.View.PictureView = Backbone.View.extend({
    tagName: 'img',
    className: 'thumbnail',
    initialize: function(){
        this.render();
    },
    render: function(){
        this.$el.attr("src", "");
        $('body').append( this.$el );
    }
});

var pictureView = new App.View.PictureView();