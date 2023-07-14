const customBackgroundColor = 'rgb(250, 250, 250)';

let currentInputField = null;

document.addEventListener('mouseover', function (event) {
    if (event.target.tagName.toLowerCase() === 'input') {
        currentInputField = event.target;
    }
});

document.addEventListener('mouseout', function (event) {
    if (event.target === currentInputField) {
        currentInputField = null;
    }
});

document.addEventListener('keydown', function (event) {
    if (currentInputField && event.ctrlKey && event.key === 'q') {
        event.preventDefault();

        if (currentInputField.disabled && currentInputField.style.backgroundColor === customBackgroundColor) {
            currentInputField.disabled = false;
            currentInputField.style.backgroundColor = '';
        } else if (!currentInputField.disabled) {
            currentInputField.disabled = true;
            currentInputField.style.backgroundColor = customBackgroundColor;
        }
    }
});
