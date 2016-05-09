module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-jst');
	grunt.initConfig({
		jst:{
			compile:{
				files:{
					"public/static/js/compiled/partials/plotViewPartials.js":[
						"public/static/js/partials/PlotView.html"
					],
					"public/static/js/compiled/partials/tocViewPartials.js":[
						"public/static/js/partials/TOCView.html"
					]
				}
			}
		}
	});

}