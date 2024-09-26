let heading = document.querySelector('.text1');
let button = document.querySelector('.button1');
let addTextButton = document.querySelector('.button2')
let removeTextButton = document.querySelector('.button3')
let newText;
let addedTextElements = [];


button.addEventListener('click', () => {
    if (heading.textContent == 'This is DOM') {
        heading.textContent = 'This is not DOM'
    } else {
        heading.textContent = 'This is DOM'
    }
});
addTextButton.addEventListener('click', () => {
    let newText = document.createElement('p')
    newText.textContent = "This is added text"
    document.body.appendChild(newText)

    addedTextElements.push(newText)
});
removeTextButton.addEventListener('click', () => {
    if (addedTextElements.length > 0) {
        let elementToRemove = addedTextElements.pop();
        document.body.removeChild(elementToRemove)
    }
});
