const text = "[Hi there! =) I'm Michael, the Junior Software Developer.]";
const textContainer = document.getElementById('text-container');
let index = 0;

function typeText() {
  if (index === 0) {
    textContainer.innerHTML += '<span class="first-letter">' + text[index] + '</span>';
  } else if (index === text.length - 1) {
    textContainer.innerHTML += '<span class="last-letter">' + text[index] + '</span>';
  } else {
    textContainer.textContent += text[index];
  }

  index++;

  if (index < text.length) {
    setTimeout(typeText, 50);
  }
}

typeText();
