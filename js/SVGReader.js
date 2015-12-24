
var loadSVG = function(url, d3dest, callback) {
  d3.xml(url, 'image/svg+xml',
		 function (error, data) {
		   if (error) {
			 console.log(error);
			 return;
		   }
		   var result = d3dest.node().appendChild(data.documentElement);
		   
		   if (typeof(callback) == "function") {
			 callback.call(this);
		   }
		 }
		 ); 
};

var getGroupsWithIds = function(id) {
  return d3.select("#" +id + " svg")
    .selectAll("g").filter(function(d,i){
	 return this.id.length > 0;
	});
	return arr;
};
