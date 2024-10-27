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



