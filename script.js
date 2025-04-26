const changeBtn = document.getElementById('changebtn');
const toggleBtn = document.getElementById('togglebtn');
const dynamicTxt = document.getElementById('dynamictxt');
const content = document.getElementById('content');

let extraElement;

// Change Text Button
changeBtn.addEventListener('click', () => {
    dynamicTxt.textContent = "The text has been updated dynamically!";
    dynamicTxt.style.color = "#4CAF50";
    dynamicTxt.style.fontWeight = "bold";
    dynamicTxt.style.fontSize = "1.5rem";

    // Wiggle effect
    changeBtn.classList.add('wiggle');
    setTimeout(() => {
        changeBtn.classList.remove('wiggle');
    }, 500);
});

// Toggle Element Button
toggleBtn.addEventListener('click', () => {
    if (!extraElement) {
        extraElement = document.createElement('p');
        extraElement.textContent = "A new element has been added! Bingo";
        extraElement.classList.add('fade-in');
        extraElement.style.marginTop = "1rem";
        content.appendChild(extraElement);
    } else {
        content.removeChild(extraElement);
        extraElement = null;
    }

    // Wiggle effect
    toggleBtn.classList.add('wiggle');
    setTimeout(() => {
        toggleBtn.classList.remove('wiggle');
    }, 500);
});


