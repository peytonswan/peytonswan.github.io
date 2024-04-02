document.addEventListener('keydown', function(event) {
    if (event.key === "g") { // When the "g" key is pressed
        function runCharacter() {
            var character = document.querySelector('.character');
            character.style.animationPlayState = 'running';
    }

        // For simplicity, we're just logging to the console
        console.log('G key was pressed');
    }
document.getElementById('runButton').addEventListener('click', function() {
    // Add logic to start the character animation
document.getElementById('character').style.animationPlayState = 'running';
});


