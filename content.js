const customBackgroundColor = 'rgb(250, 250, 250)'; 

let currentInputField = null;
let keydownEventListener = null;

document.addEventListener('mouseover', function (event) {
    if (event.target.tagName.toLowerCase() === 'input') {
        currentInputField = event.target;
        
        keydownEventListener = function (event) {
            if (event.ctrlKey && event.key === 'q') {
                event.preventDefault();
                
                if (currentInputField.disabled && currentInputField.style.backgroundColor === customBackgroundColor) {
                    currentInputField.disabled = false;
                    currentInputField.style.backgroundColor = '';
                } else if (!currentInputField.disabled) {
                    currentInputField.disabled = true;
                    currentInputField.style.backgroundColor = customBackgroundColor;
                }
            }
        };

        document.addEventListener('keydown', keydownEventListener);
    }
});

document.addEventListener('mouseout', function (event) {
    if (event.target === currentInputField) {
        currentInputField = null;
        
        if (keydownEventListener) {
            document.removeEventListener('keydown', keydownEventListener);
            keydownEventListener = null;
        }
    }
});

