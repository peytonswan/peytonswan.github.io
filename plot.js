document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('plotCanvas');
    const ctx = canvas.getContext('2d');

    let offsetX = 0, offsetY = 0, scale = 1;

    function redraw() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Reset the transform to default
        ctx.setTransform(1, 0, 0, 1, 0, 0);

        // Apply new transformations
        ctx.translate(offsetX, offsetY);
        ctx.scale(scale, scale);

        // Example drawing (this could be your plot or any other visualization)
        ctx.fillStyle = 'yellow';
        ctx.fillRect(-25, -25, 50, 50); // Draw a square centered on the origin
    }

    document.addEventListener('keydown', function(event) {
        const key = event.key.toLowerCase();
        switch (key) {
            case 's':
                offsetY += 10; // Scroll down
                break;
            case 'd':
                offsetX += 10; // Scroll right
                break;
            case 'w':
                offsetY -= 10; // Scroll up
                break;
            case 'a':
                offsetX -= 10; // Scroll left
                break;
            case 'p':
                scale *= 1.1; // Zoom in
                break;
            case 'm':
                scale /= 1.1; // Zoom out
                break;
            case 'r':
            case 'h':
            
                // Reset to defaults
                offsetX = 0;
                offsetY = 0;
                scale = 1;
                break;
        }
        redraw();
    });

    redraw(); // Initial drawing
});

