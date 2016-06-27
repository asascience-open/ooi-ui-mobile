this["JST"] = this["JST"] || {};

this["JST"]["public/static/js/partials/PlotView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<p>PlotView.html</p>\n<h1>Select Dates</h1>\n<p>StartDate</p>\n<input></input>\n<div id=startDatePicker></div>\n<p>End Date</p>\n<input id="endDatePicker"></input>\n<p>Select y vars</p>\n<select id="yVarSelection">';
 for(var i = 0; i < yVars.length; i++){ ;
__p += '\n\t<option>' +
((__t = ( yVars[i] )) == null ? '' : __t) +
'</option>\n\t';
 } ;
__p += '\n</select>\n<button id="submitButton">submit</button>\n<div id="highChartsContainer" style="min-width: 310px; height: 400px; margin: 0 auto"></div>\n<script>\n\t$(document).ready(function(){\n\t\tvar $startInput = $(\'#startDatePicker\').pickadate();\n\t\tvar $endInput = $(\'#endDatePicker\').pickadate();\n\t\tvar startPicker = $startInput.pickadate("picker")\n\t\tstartPicker.close();\n\t\tconsole.log();\n\t\t/*var startDatePicker = $startInput.pickadate("picker");\n\t\tvar endDatePicker = $endInput.pickadate("end picker");\n\t\t\t$(\'#startDatePicker\').focus(function(){\n\t\t\t\tstartDatePicker.open();\n\t\t\t});*/\n\t});\n\n</script>\n';

}
return __p
};