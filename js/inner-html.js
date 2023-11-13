//Store the first list item in a variable
var firstitems = document.getElementById('one');

//Get the content of the first list items
var itemscontent = firstitems.innerHTML;

//Update the content of the first list item so it is a link
firstitems.innerHTML = '<a href=\"http://example.org\"' + itemscontent + '</a>';