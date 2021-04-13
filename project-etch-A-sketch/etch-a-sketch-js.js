
const container = document.querySelector('.container')
const btn = document.querySelector('.btn')
btn.addEventListener('click', () => createNewGrid(prompt('Input size of the square grid (Should be <= 100)')))

function createNewGrid(grid_size=16) {
    clearGrid(document.querySelector('.container'));
    window.scrollTo(0, 25); // On button press takes us to the full grid
    for (i = 1; i <= grid_size**2; i++) {
        const new_div = document.createElement('div');
        new_div.classList.add('child');
        new_div.style.width = `${(window.innerWidth - 20)/grid_size}px`;
        new_div.style.height = `${window.innerHeight/grid_size}px`;
        //new_div.textContent = `#${i}`;
        container.appendChild(new_div)
    }
    
    let back_color;
    container.addEventListener('mouseleave', () => back_color = `#${(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)}`);
    let pixels = document.querySelectorAll('.child')
    pixels.forEach((pixel) => pixel.addEventListener('mouseover', () => pixel.style.backgroundColor = back_color) )
}

function clearGrid(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

createNewGrid()



