
var arrayModel = Backbone.Model.extend({});

var arrays = Backbone.Collection.extend({
    model:arrayModel,
    url: 'https://localhost:4000/uframe/stream'
});

