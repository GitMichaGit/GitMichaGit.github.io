// Warte, bis die Seite vollständig geladen ist
window.addEventListener('load', function () {
    // Zeige das Intro an
    document.getElementById('intro').classList.add('slide-right'); // Füge die Klasse hinzu, um nach rechts zu verschieben
    document.getElementById('intro').classList.add('second-intro'); // Füge die Klasse für die zweite Einblendung hinzu
    setTimeout(function () {
        // Füge Klasse hinzu, um das zweite Intro zu zeigen
        document.getElementById('intro').classList.add('fade-out');
    }, 3000); // Wartezeit, bis das erste Intro ausgeblendet wird (3 Sekunden in diesem Beispiel)
});
