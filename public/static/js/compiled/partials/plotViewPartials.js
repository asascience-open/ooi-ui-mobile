this["JST"] = this["JST"] || {};

this["JST"]["public/static/js/partials/PlotView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>PlotView.html</p>\n<div>\n\t<div id="datetimepicker1">\n\t\t<input type=\'text\' class="form-control" />\n         \t<span class="input-group-addon">\n            \t<span class="glyphicon glyphicon-calendar"></span>\n            </span>\n\t</div>\n</div>\n<script src="/lib/bootstrap3-datetimepicker"></script>\n<script>\n\t//I feel like this is bad practice.\n\t$(\'#datetimepicker1\').datetimepicker();\n</script>';

}
return __p
};