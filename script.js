import { addListItem } from './addListItem.js';
import { clearList } from './clearList.js';

// create a form with a text input and a submit button
// when the form is submitted, add the text input to a list
// clear the text input and focus it ready for the next entry

// get the form
var form = document.getElementById('form');
// add an event listener for the form submit
form.addEventListener('submit', function (event) {
    // prevent the default behaviour of the form
    event.preventDefault();
    // call the addListItem function
    addListItem();
});
// get the clear button
var clearButton = document.getElementById('clear-button'); 
// add an event listener for the clear button click
clearButton.addEventListener('click', function () {
    clearList();
});