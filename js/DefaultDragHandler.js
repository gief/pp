var DefaultDragHandler = function(cfgObj) {
	this.cfgObj = cfgObj;
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

		var objNode = d3obj.node();
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
