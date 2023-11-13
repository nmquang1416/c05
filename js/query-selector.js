//query selector only returns the first match.
var el=document.querySelector('li.hot');
el.className = 'cool';

//query selectorAll return a nodelist.
//the third li element is then selected and changed.
var els = document.querySelectorAll('li. hot');
els[1].className = 'cool';