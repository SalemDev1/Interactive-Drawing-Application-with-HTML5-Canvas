//Task 2- Configure the JavaScript for Drawing Context
// Canvas and 2D drawing context setup
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

// these are variables that are set to track drawing state
let isDrawing = false;
let startX, startY; 

// These  are just the tool and color selectors
const shapeSelector = document.querySelectorAll('input[name="shape"]');
const colorPicker = document.getElementById('colorPicker');
let selectedShape = 'line';

// This updates the  selected shape based on radio button choice found in the html structure 
shapeSelector.forEach(option => {
    option.addEventListener('change', () => {
        selectedShape = document.querySelector('input[name="shape"]:checked').value;
    });
});

// Starts the  drawing on mousedown
canvas.addEventListener('mousedown', (event) => {
    isDrawing = true; 
    startX = event.offsetX;
    startY = event.offsetY;
});

// Stops the  drawing on mouseup
canvas.addEventListener('mouseup', (event) => {
    if (!isDrawing) return;
    isDrawing = false;

    const endX = event.offsetX;
    const endY = event.offsetY;

    // Draw the selected shape
    drawShape(selectedShape, startX, startY, endX, endY);
});

//Task 3- Implement Shape Drawing Logic
// Function to draw selected shape (basically your paint brush, now All you need to paint is, a few tools, a little instruction, and a vision in your mind.-Bob Ross)
function drawShape(shape, x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.strokeStyle = colorPicker.value;

    if (shape === 'line') {
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
    } else if (shape === 'rectangle') {
        const width = x2 - x1;
        const height = y2 - y1;
        ctx.rect(x1, y1, width, height);
    } else if (shape === 'circle') {
        const radius = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        ctx.arc(x1, y1, radius, 0, 2 * Math.PI);
    }
    ctx.stroke();
}
