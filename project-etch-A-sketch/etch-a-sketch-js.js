
const container = document.querySelector('.container')

for (i = 1; i < 257; i++) {
    const new_div = document.createElement('div');
    new_div.textContent = `#${i}`;
    new_div.style.fontSize = '15px';
    new_div.classList.add('child');
    container.appendChild(new_div)
}

const pixels = document.querySelectorAll('.child')

pixels.forEach((pixel) => pixel.addEventListener('mouseover', () => pixel.style.backgroundColor = 'black') )