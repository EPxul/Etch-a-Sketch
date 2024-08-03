document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');
    const button = document.getElementById('resizeButton');

    // Function to create the grid
    function createGrid(size) {
        // Clear the existing grid
        container.innerHTML = '';

        // Calculate the size of each square
        const squareSize = 960 / size; // 960px total width

        // Set container dimensions
        container.style.width = `${960}px`;
        container.style.height = `${960}px`;

        // Create the new grid
        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;

            // Add event listener for mouse enter
            square.addEventListener('mouseenter', function() {
                square.style.backgroundColor = 'blue'; // Change color on hover
            });

            container.appendChild(square);
        }
    }

    // Create the initial grid
    createGrid(16);

    // Add event listener to the button
    button.addEventListener('click', function() {
        let size;
        do {
            size = parseInt(prompt("Enter the number of squares per side (max 100):"), 10);
        } while (isNaN(size) || size <= 0 || size > 100);

        // Create the new grid with the specified size
        createGrid(size);
    });
});
