var firstitems = document.getElementById('one'); //get first list item
if (firstitems.hasAttribute('class')){ //if it has class attribute
    var attr = firstitems.getAttribute('class'); // get the attribute
}

//add the value of the attribute after the list
var el = document.getElementById('scriptResults');
el.innerHTML = '<p> the first items has a class name: ' + attr + '</p>'