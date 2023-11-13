var element = document.getElementsByClassName('hot') //Find hot items
if(element.length >2){
    // if 3 or more are found

    var el = element[2];
    el.className = 'cool'
}