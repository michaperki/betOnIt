// create a function to add a list item
export function addListItem() {
    // get the text input
    var textInput = document.getElementById('text-input');
    var duration = document.getElementById('time-input');
    // get the list
    var list = document.getElementById('list');

    // add the text input to the list item if it's not empty
    if (textInput.value !== '') {
        // create a new list item
        var listItem = document.createElement('li');
        // create a div to hold the text
        var textDiv = document.createElement('div');
        textDiv.className = 'text-div';
        // add the text input to the list item
        textDiv.textContent = textInput.value;
        listItem.appendChild(textDiv);
        // add a status div to the list item
        var statusDiv = document.createElement('div');
        statusDiv.className = 'status-div';
        statusDiv.textContent = 'Open';
        listItem.appendChild(statusDiv);
        // add the duration input to the list item
        var durationDiv = document.createElement('div');
        durationDiv.className = 'duration-div';
        durationDiv.textContent = duration.value * 10;
        // decrease the duration by 1 every second until it reaches 0.
        // when it reaches 0... 
        //  freeeze the duration at 0
        //  change the status to "Closed" and stop the timer.
        setInterval(function () {
            durationDiv.textContent = durationDiv.textContent - 1;
            if (durationDiv.textContent <= 0) {
                durationDiv.textContent = 0;
                statusDiv.textContent = 'Closed';
                clearInterval();
            }
        }, 1000);
        listItem.appendChild(durationDiv);
        
        // create a div to hold the buttons
        var buttonDiv = document.createElement('div');
        buttonDiv.className = 'button-div';
        // add a "delete" button to the list item
        var deleteButton = document.createElement('button');
        // add an ID to the delete button
        deleteButton.id = 'delete-button';
        deleteButton.textContent = 'Delete';
        // add an event listener for the delete button click
        deleteButton.addEventListener('click', function () {
            // remove the list item from the list
            list.removeChild(listItem);
            // focus the text input
            textInput.focus();
        });
        var editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        // add an ID to the edit button
        editButton.id = 'edit-button';
        editButton.addEventListener('click', function () {
            // edit the list item inline
            var newText = prompt('Enter new text', listItem.textContent);
            if (newText !== null) {
                listItem.textContent = newText;
            }
            // focus the text input
            textInput.focus();
        });
        // add the buttons to the button div
        buttonDiv.appendChild(editButton);
        buttonDiv.appendChild(deleteButton);
        // add the button div to the list item
        listItem.appendChild(buttonDiv);
        // add the list item to the list
        list.appendChild(listItem);
    }
    // clear the text input
    textInput.value = '';
    // focus the text input
    textInput.focus();
}