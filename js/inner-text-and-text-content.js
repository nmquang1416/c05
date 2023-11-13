var firstitems = document.getElementById('one'); //find first list items
var showtextcontent = firstitems.textContent; // get value of textcontent
var showinnertext = firstitems.innerHTML; // get value of innertext

//show the content of these two properties at the end of the list
var msg = '<p>textcontent: ' + showtextcontent +'</p>';
    msg += '<p>innertext: ' + showinnertext + '</p>';
var el = element.getElementById('scriptResults');
el.innerHTML = msg;

firstitems.textContent = 'sourgdough bread'; // update the first list items.