var itemstwo = document.getElementById('two'); 
//get second list items.

var eltext = itemstwo.firstChild.nodeValue;
//Get its text content

eltext = eltext.replace('pine nuts', 'kale');
//change pine nuts to kale

itemstwo.firstChild.nodeValue = eltext;
//update the list item