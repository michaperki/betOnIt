// create a function to add a list item
export function clearList() {
    // get the list
    var list = document.getElementById('list');
    // remove all the list items from the list
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    // focus the text input
    document.getElementById('text-input').focus();
}