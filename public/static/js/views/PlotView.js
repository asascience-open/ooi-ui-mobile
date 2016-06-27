var PlotView = Backbone.View.extend({
	initialize: function(){
		this.render();
		//To be set when the user interacts with the ui.
		this.xvars = undefined;
		this.yvars = undefined;
		this.startDate = undefined;
		this.endDate = undefined;
		this.stream = undefined;
		this.referenceDesignator = undefined;

		//Get the stream to plot.
		var self = this;
		//this.streamModel.url = "http://localhost:4000/uframe/stream?stream_name=" + stream;
		//$.when(this.streamModel.fetch()).done(function(){
			//console.log("ref_des: " + self.streamModel.attributes.stream_name);
		//});
	},
	tagName: "div",
	template: JST["public/static/js/partials/PlotView.html"],
	events: {
		//This needs to be an action that is triggered when a plot button is clicked.
		"click #submitButton" : "plotButtonPressed",

	},
	render: function(){
		//Get the yvars.
		var streamYVars = this.attributes.streamModel.attributes.streams[0].variables;
		this.$el.html(this.template({yVars:streamYVars}));
	},
	plotButtonPressed: function(){
		//TODO make this get plot data and show a plot.
		console.log("plot button pressed");

		//parse the startDate and endDate inputs and convert it to an ISO string.
		var startDate = new Date(this.$el.find("#startDatePicker").val()).toISOString();
		var endDate	= new Date(this.$el.find("#endDatePicker").val()).toISOString();

		//Get the yvar that the user should have selected to plot.
		var yvar = this.$el.find("#yVarSelection").val();
		var param_name = this.attributes.streamModel.attributes.streams[0].parameter_display_name[this.attributes.streamModel.attributes.streams[0].variables.indexOf(yvar)];
		console.log("yvar: " + yvar);
		console.log(param_name);
		self = this;
		this.model.updateDataUrl(this.attributes.referenceDesignator, this.attributes.stream, "time", yvar, startDate, endDate);
		$.when(this.model.fetch()).done(function(){
			console.log(JSON.stringify(self.model.attributes.chartableData));
			console.log("plotting data returned in plotview");
			//Create a chart:
			self.$el.find("#highChartsContainer").highcharts({
				chart:{
					type:"line"
				},
				title: self.attributes,
				xAxis:{
					type:"datetime"
				},
				yAxis:{
					title:{text: param_name}
				},
				series:[{
					name: "plotted data",
					data: self.model.attributes.chartableData
				}]
			});

		});
	}

});
