//select the starting point and find its children.
var startitems = document.getElementsByTagName('ul')[0];
var firstitems = startitems.firstChild;
var lastitems = startitems.lastChild;

//change the values of the children's class attributes.
firstitems.className = 'complete';
lastitems.className = 'cool';
