var PlotView = Backbone.View.extend({
	initialize: function(model, streamModel, stream, referenceDesignator){
		//To be set when the user interacts with the ui.
		this.xvars = undefined;
		this.yvars = undefined;
		this.startDate = undefined;
		this.endDate = undefined;

		//Set attributes from parameters.
		this.stream = stream;
		this.referenceDesignator = referenceDesignator;
		this.model = model;
		this.streamModel = streamModel

		//Get the stream to plot.
		var self = this;
		this.streamModel.url = "http://localhost:4000/uframe/stream?stream_name=" + stream;
		$.when(this.streamModel.fetch()).done(function(){
			console.log("ref_des: " + self.streamModel.attributes.stream_name);
		});
	},
	tagName: "div",
	template: JST["PlotView.html"],
	events: {
		//This needs to be an action that is triggered when a plot button is clicked.
		"keydown" : "plotButtonPressed"
	},
	render: function(){
		//Render menus and plots and stuff.
		this.$el.html(this.template());
	},
	plotButtonPressed: function(){
		self = this;
		this.model.updateDataUrl(ref_des, stream, pv.xvars, pv.yvars, pv.startDate, pv.endDate);
		$.when(this.plottingModel.fetch()).done(function(){
			console.log(JSON.stringify(self.plottingModel));
			//Here we will have some data in the plotting model. We will need to pass this to the view and plot it.
		});
	}

})