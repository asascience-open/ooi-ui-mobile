
var arrayModel = Backbone.Model.extend({
	//This is for when we GET /uframe/streams?stream_name
	/*parse: function(data){
		return data.stream;
	}*/
});

var arrays = Backbone.Collection.extend({
    model:arrayModel,
    url: 'http://localhost:4000/uframe/stream?',
    parse: function(data){
        return data.streams;
    }
});
