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
		 
		var objNode = obj; // equivalent of: d3obj.node();
		var prevNode = objNode.previousSibling;
		var nextNode = objNode.nextSibling;
		
		console.log(objNode.previousSibling);//.getBoundingClientRect());
		// Starting with objNode traverse up the list of siblings
		while (objNode = objNode.previousSibling) {
			if (this.compare(objNode.nextSibling, objNode) < 0) {
				// objNode needs to already be in front of its sibling
				console.log(objNode.nextSibling, objNode, "first is behind its latter");
				return false;
			}
		}
		// Starting with objNode traverse down the list of siblings
		console.log("TODO TODO TODO");
		return true;
	}
	
	this.initialize = function(obj) {
		/* Initialize the document in preparations for dragHandler to function properly
		 *
		 * Input: obj can be any object that would normally be sent to dragHandler
		 */
		var d3obj = d3.select(obj);
		var parentNode = d3obj.node().parentNode;
		
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
		} else if (nextNode && this.compare(nextNode, objNode) < 0) {
			parentNode.insertBefore( nextNode, objNode);
		}
		// card order
		// boundaries
		// magic areas
	};

};
