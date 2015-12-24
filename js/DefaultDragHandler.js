var DefaultDragHandler = function(cfgObj) {
  this.cfgObj = cfgObj;
  this.state;
  this.compare = function(a,b) {
	  var aRect = a.getBoundingClientRect();
	  var bRect = b.getBoundingClientRect();
	  
    if (aRect.left == bRect.left) return aRect.top - bRect.top;
	else return aRect.left - bRect.left;
  };
};
