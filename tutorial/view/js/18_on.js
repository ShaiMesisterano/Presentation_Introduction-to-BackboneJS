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
    events: {
        'click button#like': 'like'
    },
    initialize: function(){
        this.monkeyPicture = new App.Model.Picture();
        this.turtlePicture = new App.Model.Picture();
        
        this.monkeyPicture.set("src", "images/monkey_on_a_bike.jpg");
        this.turtlePicture.set("src", "images/turtle_on_bikes.jpg");
        
        this.render();
    },
    render: function(){
        this.monkeyPictureView = new App.View.PictureView({ model: this.monkeyPicture });
        this.turtlePictureView = new App.View.PictureView({ model: this.turtlePicture });
        
        this.$el.append(this.monkeyPictureView.$el);
        this.$el.append(this.turtlePictureView.$el);
    },
    like: function(){
        this.$el.find('#like').text("You like this");
    }
});


App.View.PictureView = Backbone.View.extend({
    tagName: 'img',
    events: {
        'mouseenter': 'addLeftBorder',
        'mouseleave': 'removeLeftBorder'
    },
    initialize: function(){
        this.render();
    },
    render: function(){
        this.$el.attr("src", this.model.get("src"));
        return this;
    },
    addLeftBorder: function(){
        this.$el.css("border-left", "20px solid darkred")
    },
    removeLeftBorder: function(){
        this.$el.css("border-left", "");
    }
});

var albumView = new App.View.AlbumView();