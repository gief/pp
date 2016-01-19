
var loadSVG = function(url, d3dest, callback) {
	d3.xml(url, 'image/svg+xml',
		   function (error, data) {
			   if (error)
			   {
				   console.log(error);
				   return;
			   }
			   var result = d3dest.node().appendChild(data.documentElement);

			   if (typeof(callback) == "function")
			   {
				   callback.call(this);
			   }
		   }
		   ); 
};

var idFilter = function () {
	return this.id && this.id.length > 0;
}

var getGroupsWithIds = function(id) {
	return d3.select("#" + id + " svg")
		.selectAll("g").filter(idFilter);
	return arr;
};

var inferDataArray = function(d3selection) {
	var arr=[];
	d3selection.each(
		function () {
			arr.push({
				"id": this.id,
				"initialBoundingClientRect": this.getBoundingClientRect()
			});
		}
	);
	return arr;
};

