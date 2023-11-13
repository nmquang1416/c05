//select the starting point and find its siblings.

var start_items = document.getElementById('two');
var prev_items = start_items.previousElementSibling;
var next_items = start_items.nextSibling;

//change the values of the sibling, class attribute
prev_items.className = 'complete';
next_items.className = 'cool';