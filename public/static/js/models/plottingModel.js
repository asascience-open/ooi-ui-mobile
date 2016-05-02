var plottingModel = Backbone.Model.extend({
	defaults: {
		reference_designator: undefined
	},
	initialize: function(){
		
	},
	updateDataUrl: function(instrument, stream, xvars, yvars, startdate, endDate){
		this.url = "http://localhost:4000/uframe/get_data/" + instrument + "/" + stream + "/" + xvars + "/" + yvars + "?instrument=" + instrument + "&stream" + stream + "&xvars" + xvars + "&yvars" + yvars + "&startdate" + startdate + "&endDate" + endDate;
	}
});