var plottingModel = Backbone.Model.extend({
	parse: function(fetchedData){

		var chartableData = [];

		//TODO: move this logic to ooi_ui_services.
		for(var i = 0; i < fetchedData.data.length; i++){
			var currentArray = fetchedData.data[i]
			delete currentArray.pk;

			//Convert seconds since 1900 to time since 1970.
			var seconds = currentArray[this.xvars];
			var msSince1970 = (seconds - 2208988800) * 1000;
			currentArray[this.xvars] = msSince1970;
			chartableData.push([currentArray[this.xvars], currentArray[this.yvars]]);
		}
		//create an array that is easy to chart.
		fetchedData.chartableData = chartableData;
		return fetchedData;
	},
	defaults: {
		reference_designator: undefined
	},
	initialize: function(){

	},
	updateDataUrl: function(instrument, stream, xvars, yvars, startdate, endDate){
		//TODO make this work with multiple x/y vars.
		this.yvars = yvars;
		this.xvars = xvars;
		this.url = "http://localhost:4000/uframe/get_data/" + instrument + "/" + stream + "/" + xvars + "/" + yvars + "?instrument=" + instrument + "&stream=" + stream + "&xvars=" + xvars + "&yvars=" + yvars + "&startdate=" + startdate + "&enddate=" + endDate;
		console.log("plot url: " + this.url);
	}
});
