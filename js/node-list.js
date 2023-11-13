var hotitems = document.querySelectorAll('li.hot'); //store nodelist in an array
if (hotitems.length > 0){ 
    // if it contains items

    for (var i = 0; i<hotitems.length; i++){ 
        // loop through each items

        hotitems[i].className = 'cool'; 
        // change value of class attribute
    }
}