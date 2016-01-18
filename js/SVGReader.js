
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

var getGroupsWithIds = function(id) {
	return d3.select("#" + id + " svg")
		.selectAll("g").filter(function(d, i) {
								   return this.id.length > 0;
							   });
	return arr;
};

var inferDataArray = function(d3arr) {
	var arr=[];
	for (var i = 0; i < d3arr.length; i += 1)
	{
		var entry = {};
		var el = d3.select(d3arr[i]);
		entry.id = el.attr(id);
		entry.node = el.node();
		entry.initialBounds = el.node().getBoundingClientRect();
		arr.push(entry);
	}
	return arr;
};

