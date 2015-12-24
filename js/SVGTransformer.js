
  var translateAttr = function(attrStr, x, y) {
	var t = [];
	var position = [0, 0];
	t[0] = attrStr.indexOf("translate");
	var hasPriorTranslate = t[0] > -1;

	if (hasPriorTranslate) {
	  // existing translate
	  t[1] = t[0] + 10;
	  t[2] = attrStr.indexOf(",", t[1]);
	  t[3] = attrStr.indexOf(")", t[2]);
	  position[0] = Number(attrStr.substring(t[1], t[2]));
	  position[1] = Number(attrStr.substring(t[2]+1, t[3]));
	  attrStr = attrStr.substring(0,t[0]) + attrStr.substr(t[3] + 1);
	}
	position[0] += x;
	position[1] += y;
	return attrStr + " translate(" + position[0] + "," + position[1] + ")";
  };

