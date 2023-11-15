function runTextAnimation() {
    const text = "[ Michael Beyer - Portfolio ]";
    const textContainer = document.getElementById('text-container');
    let index = 0;
  
    function typeText() {
      // Füge den nächsten Buchstaben hinzu
      textContainer.textContent += text[index];
      index++;
      if (index < text.length) {
        // Wenn es mehr Buchstaben gibt, setze einen Timer für den nächsten Buchstaben
        setTimeout(typeText, 50);
      } else {
        // Nachdem der gesamte Text angezeigt wurde, warte 10 Sekunden und starte erneut
        setTimeout(() => {
          // Lösche den vorherigen Text und setze den Index zurück
          textContainer.textContent = '';
          index = 0;
          // Starte die Animation erneut
          runTextAnimation();
        }, 30000);
      }
    }
    
    // Starte die Animation
    typeText();
  }
  
  // Starte die Animation
  runTextAnimation();
  