var App = {
    Model: {},
    View: {},
    Collection: {}
}

App.Model.Picture = Backbone.Model.extend({
    defaults: {
        src: ""
    }
});

App.View.AlbumView = Backbone.View.extend({
    el: '#album',
    initialize: function(){
        this.picture = new App.Model.Picture();
        this.picture.set("src", "");
        
        this.render();
    },
    render: function(){
        this.pictureView = new App.View.PictureView({ model: this.picture });
        this.$el.append(this.pictureView.$el);
    }
});


App.View.PictureView = Backbone.View.extend({
    tagName: 'img',
    className: 'thumbnail',
    initialize: function(){
        this.render();
    },
    render: function(){
        this.$el.attr("src", this.model.get("src"));
        return this;
    }
});

var albumView = new App.View.AlbumView();