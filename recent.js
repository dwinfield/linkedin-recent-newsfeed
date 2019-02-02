var b = document.querySelectorAll("button.dropdown-trigger"); 
b.forEach(function(node) {
	
	if ( node.getAttribute('data-control-name') == 'feed_sort_dropdown_trigger') {
		//get the id and then get the options (the options are only there after click(); has been called
		var controlsStr = node.getAttribute('aria-controls');		
		var optionsUl = document.getElementById(controlsStr);
		optionsUl.click();
		if (optionsUl.childElementCount > 0 ) {
			var recentNode;
			// node list is ul.li.button
			optionsUl.querySelectorAll('li').forEach(function (liNode) {				
				liNode.querySelectorAll('button').forEach(function (buttonNode) {	
					buttonNode.childNodes.forEach(function (textNode) {
						if ( textNode.nodeValue == 'Recent' ) {
							recentNode = buttonNode;
						}						
					});
				});				
			});	
			if ( recentNode) recentNode.click();
			else console.log('LinkedIn-Recent-Timeline -- Could not find recent node');
			
		}
	}
});