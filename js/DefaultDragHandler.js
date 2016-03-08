var DefaultDragHandler = function(cfgObj) {
	this.cfgObj = cfgObj;

	this.valid = function(obj) {
		/*
		 * TODO, use this to confirm that a node (and, perhaps its siblings, parentNodes, etc...)
		 * is properly ordered or initialized
		 * so that the compare function and dragHandler function work correctly.
		 * 
		 * In DefaultDragHandler, we MUST has every node already sorted before we can work properly
		 *
		 * Input: obj can be any object that would normally be sent to dragHandler
		 * Output: true if the compare and dragHandlers will behave correctly.
		 */

		var d3obj = d3.select(obj);
		var parentNode = d3obj.node().parentNode;
		var children = parentNode.children;
		for (var j = 1; j < children.length ; j += 1)
		{
			var i = j - 1;
			if (this.compare(children[i], children[j]) > 0)
			{
				alert(" failed validity check " + children[i].id);
				return false;
			}
		}
		return true;
	}

	this.initialize = function(sel, nodes) {
		console.log("nodes", nodes);
		/* Initialize the document in preparations for dragHandler to function properly
		 */
		var data = inferDataArray(nodes); // TODO clean up the referals. SVGReader should be an object
		d3.selectAll(sel + " > *")
			.data(data).enter() // This associates the data with the element (see object.__data__). Note that it depends on the inferred data array to be in the proper order as the selected elements.  
		d3.selectAll(sel + " > *").sort(this.dataCompare);
	}

	this.dataCompare = function(a, b) {
		if (a.initialBoundingClientRect.left == b.initialBoundingClientRect.left) return a.initialBoundingClientRect.top - b.initialBoundingClientRect.top;
		else return a.initialBoundingClientRect.left - b.initialBoundingClientRect.left;
	}
	this.compare = function(a, b) {
		var aRect = a.getBoundingClientRect();
		var bRect = b.getBoundingClientRect();

		if (aRect.left == bRect.left) return aRect.top - bRect.top;
		else return aRect.left - bRect.left;
	};

	this.dragHandler = function (obj) {
		var d3obj = d3.select(obj);
		var tfStr = d3obj.attr("transform");
		var newStr = translateAttr(tfStr, d3.event.dx / 2, d3.event.dy / 2);
		d3obj.attr("transform", newStr);

		var objNode = obj; // equivalent of: d3obj.node();
		var prevNode = objNode.previousSibling;
		var nextNode = objNode.nextSibling;
		var parentNode = objNode.parentNode;

		// edge cases include: Im first, im last, im alone

		if (prevNode && this.compare(objNode, prevNode) < 0)
		{
			parentNode.insertBefore(objNode, prevNode);
		}
		else if (nextNode && this.compare(nextNode, objNode) < 0)
		{
			parentNode.insertBefore(nextNode, objNode);
		}
		// card order
		// boundaries
		// magic areas
	};

};
