
var arrayModel = Backbone.Model.extend({});

var arrays = Backbone.Collection.extend({
    model:arrayModel,
    url: 'http://localhost:4000/uframe/stream?',
    parse: function(data){
        return data.streams;
    }
});
