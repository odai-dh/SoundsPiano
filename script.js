// Function to play the sound associated with the piano key
function playSound(note) {
    const audio = new Audio(`sounds/${note}.mp3`);  // Load sound file from the sounds folder
    audio.play();  // Play the sound
}

// Add event listeners to each piano key for mouse click events
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', function() {
        const note = this.dataset.note;  // Get the note from the data-note attribute
        playSound(note);  // Play the corresponding sound
    });
});

// Optional: Add keyboard key functionality
// Map keyboard keys to piano notes
document.addEventListener('keydown', function(event) {
    let note;

    // Map specific keyboard keys to piano notes
    switch(event.key) {
        case 'a':  // 'A' key plays the C note
            note = 'C3';
            break;
        case 'w':  // 'W' key plays the C# note
            note = 'Db3';
            break;
        case 's':  // 'S' key plays the D note
            note = 'D3';
            break;
        case 'e':  // 'E' key plays the D# note
            note = 'Eb3';
            break;
        case 'd':  // 'D' key plays the E note
            note = 'E3';
            break;
        case 'f':  // 'F' key plays the F note
            note = 'F3';
            break;
        case 't':  // 'T' key plays the F# note
            note = 'Gb3';
            break;
        case 'g':  // 'G' key plays the G note
            note = 'G3';
            break;
        case 'y':  // 'Y' key plays the G# note
            note = 'Ab3';
            break;
        case 'h':  // 'H' key plays the A note
            note = 'A3';
            break;
        case 'u':  // 'U' key plays the A# note
            note = 'Bb3';
            break;
        case 'j':  // 'J' key plays the B note
            note = 'B3';
            break;
        // Add more keys if you want to support more octaves
    }

    // If a note is assigned to the pressed key, play the corresponding sound
    if (note) {
        playSound(note);
    }
});