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

// const handleVolume = (e) => {
//     audio.volume = e.target.value; // passing the range slider value as an audio volume
// }


// Optional: Add keyboard key functionality
// Map keyboard keys to piano notes
document.addEventListener('keydown', function(event) {
    let note;

    // Map specific keyboard keys to piano notes
    switch(event.key) {
        case 'a':  
            note = 'C5';
            break;
        case 'w':  
            note = 'Db5';
            break;
        case 's':  
            note = 'D5';
            break;
        case 'e':  
            note = 'Eb5';
            break;
        case 'd':  
            note = 'E5';
            break;
        case 'f': 
            note = 'F5';
            break;
        case 't':  
            note = 'Gb5';
            break;
        case 'g':  
            note = 'G5';
            break;
        case 'y':  
            note = 'Ab5';
            break;
        case 'h':  
            note = 'A5';
            break;
        case 'u':  
            note = 'Bb5';
            break;
        case 'j':  
            note = 'B5';
            break;
        case 'k':  
            note = 'C6';
            break;
        // case 'x':  
        //     note = 'C6';
        //     break;
        // case 'k':  
        //     note = 'C6';
        //     break;
        // case 'k':  
        //     note = 'C6';
        //     break;
        // Add more keys if you want to support more octaves
    }

    // If a note is assigned to the pressed key, play the corresponding sound
    if (note) {
        playSound(note);
    }
    // volumeSlider.addEventListener("input", handleVolume);
});