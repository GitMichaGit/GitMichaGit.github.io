const textContainer = document.getElementById('age-container');
let birthDate = new Date("1998-01-20");
let index = 0;

function updateText() {
  const today = new Date();
  const ageMilliseconds = today - birthDate;
  const ageSeconds = Math.floor(ageMilliseconds / 1000);
  const years = (ageSeconds / (365.25 * 24 * 60 * 60)).toFixed(9);

  const newText = `Hi there! I'm a ${years} year old junior software developer.`;

  textContainer.innerHTML = ''; 

  const spans = Array.from(newText).map((char, i) => {
    const span = document.createElement('span');
    span.textContent = char;

    if (i === 0) {
      span.className = 'first-letter';
    } else if (i === newText.length - 1) {
      span.className = 'last-letter';
    }

    return span;
  });

  spans.forEach((span, i) => {
    textContainer.appendChild(span);

    if (i === spans.length - 1) {
      setTimeout(() => {
        index = 0; // Reset index at the end of the text
        updateAndDisplayText(); // Trigger the next iteration
      }, 50);
    }
  });
}

function updateAndDisplayText() {
  updateText();
}

updateAndDisplayText();

setInterval(updateAndDisplayText, 50);