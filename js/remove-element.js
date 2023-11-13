//store the element to be removed in a variables.
var removeEl = document.getElementsByTagName('li')[3];

//find the element which contains the element to be removed.
var containerel = document.getElementsByTagName('ul')[0];

//remove element
containerel.removeChild(removeEl);