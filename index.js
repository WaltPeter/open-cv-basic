function prefade() {
	document.getElementById("pre").style.opacity = 0; 
	document.getElementById("load1").style.opacity = 0; 
	window.setTimeout(function() {
		document.getElementById("pre").parentNode.removeChild(document.getElementById("pre")); 
	}, 1000); 
}

function init() {
	var i; 
	for (i=0; i<document.getElementsByTagName("div").length; i++) {
		if (parseInt(document.getElementsByTagName("div")[i].style.zIndex) > 100) {
			document.getElementsByTagName("div")[i].style.zIndex = -1000; 
		}
	}
	
	for (i=0; i<document.getElementsByClassName("content").length; i++) {
		document.getElementsByClassName("content")[i].style.zIndex = 9999999; 
	}
	
	window.setTimeout(prefade(), 2000); 
}

document.getElementsByTagName("body")[0].onload = function() {window.setTimeout(init(), 500)}; 