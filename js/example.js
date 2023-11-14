//Adding items to start and end of list
var list = document.getElementsByTagName('ul')[0];

//add new items to end of list
var newitemlast = document.createElement('li');
var newTextLast = document.createTextNode('cream');
newitemlast.appendChild(newTextLast);
list.appendChild(newitemlast);

//add new item start of list
var newitemFirst = document.createElement('li');
var newtextFirst = document.createTextNode('kale');
newitemFirst.appendChild(newtextFirst);
list.insertBefore(newitemFirst, list.firstChild);
var listitems = document.querySelectorAll('li');

//add a class of cool to all list items
var i;
for (i = 0; i < listitems.length; i++){
    listitems[i].className = 'cool';
}

//add number of items in the list to the heading
var heading = document.querySelector('h2');
var headingtext = heading.firstChild.nodeValue;
var totalitems = listitems.length;
var newheading = headingtext + '<span>' + totalitems + '</span>';
heading.innerHTML = newheading;