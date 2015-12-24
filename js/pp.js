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
			dragHandler(this);
		});

var dragHandler = function (obj) {
	var d3obj = d3.select(obj);
	var tfStr = d3obj.attr("transform");
	var newStr = translateAttr(tfStr, d3.event.dx / 2, d3.event.dy / 2);
	d3obj.attr("transform", newStr);
	
	var objNode = d3obj.node();
	var prevNode = objNode.previousSibling;
	var nextNode = objNode.nextSibling;
	var parentNode = objNode.parentNode;
	
	//Main
	// optimize: we dont have to compare to bothe prev and nextSiblings. can use dx and dy to decide on which
	var diff = this.dragHandler.compare(objNode, prevNode);
	// edge cases include: Im first, im last, im alone
	loggle(diff);
	
	// card order
	// boundaries
	// magic areas
};


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
