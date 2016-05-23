this["JST"] = this["JST"] || {};

this["JST"]["public/static/js/partials/PlotView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<p>PlotView.html</p>\n<h1>Select Dates</h1>\n<p>StartDate</p>\n<input id="startDatePicker"></input>\n<p>End Date</p>\n<input id="endDatePicker"></input>\n<p>Select y vars</p>\n<select id="yVarSelection">';
 for(var i = 0; i < yVars.length; i++){ ;
__p += '\n\t<option>' +
((__t = ( yVars[i] )) == null ? '' : __t) +
'</option>\n\t';
 } ;
__p += '\n</select>\n<button id="submitButton">submit</button>\n<div id="highChartsContainer" style="min-width: 310px; height: 400px; margin: 0 auto"></div>\n<script>\n\t$(\'#startDatePicker\').pickadate()\n\t$(\'#endDatePicker\').pickadate()\n</script>';

}
return __p
};