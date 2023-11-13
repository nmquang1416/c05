var element = document.getElementsByTagName('li'); //Find <li> elements

if (element.length) {
    //if 1 or more are found

    var el = element[0]; 
    // Select the first one using array syntax

    el.className = 'cool';
    //change the value of the class attribute
}