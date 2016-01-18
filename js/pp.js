/**
 * d3 code for PP
 */ 
var svg;
var dh;
var init = function(initObj) {
	svg = d3.select("#printandplay svg");
	dh = initObj.dragHandler;
};
var loggleX =0;
var loggle = function(str) {
	loggleX = (loggleX + 1) % 5;
	if (loggleX == 0) alert(str);
};

var drag = d3.behavior.drag()
	.origin(Object)
	.on("drag", function () {
			dh.dragHandler(this);
		});


var demoLoad =  function () {
	loadSVG(testSVG, svg);
};

var demoDrag = function() {
	try
	{
		init({"dragHandler":new DefaultDragHandler()});
		getGroupsWithIds("printandplay")
			.call(drag); // this drag
	} catch (e) { alert(e); }
};
var testSVG = "https://rawgit.com/gief/cardboard/master/assets/plastic%20playing%20cards/Cards-Inkscape.svg";
