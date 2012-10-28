var PMS = PMS || {};

PMS=(function($,window,document,PMS){
	PMS.projects = {
		index : function (title,url) {
				$.getJSON(url,function(data) {
					var indexTemplate = $("#mlistview").html();
					var indexHeader = $("#mheader").html();
					$("#projects_header").html(Mustache.to_html(indexHeader, title) );
					$("#projects_index").html(Mustache.to_html(indexTemplate, data) );
					$("#projects_index").listview('refresh');
				})
			},
		show: function(id) {
			var url = "/projects/"+id+".json";
			console.log(url);
				$.getJSON(url,function(data) {
					var indexTemplate = $("#mproject_show").html();
					var builder = Mustache.to_html(indexTemplate, data)
					console.log(builder);
					$("#project_show").html(Mustache.to_html(indexTemplate, data) );
					$("#project_show").listview('refresh');
				})

		}	

		}

	return PMS;
})(jQuery,this,this.document,PMS)