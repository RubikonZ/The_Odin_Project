const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const par = document.createElement('p');
par.textContent = "Hey I'm red!"
par.style.color = 'red';
container.appendChild(par)

const head = document.createElement('h3');
head.style.color = 'blue';
head.textContent = "I'm a blue h3!";
container.appendChild(head);

const black_div = document.createElement('div');
black_div.style.borderColor = 'black'; // not getting any difference
black_div.style.backgroundColor = "pink";
// moved div append to container FROM HERE

const div_elem = document.createElement('h1');
div_elem.textContent = "I'm in a div";
black_div.appendChild(div_elem);

const div_elem2 = document.createElement('p');
div_elem2.textContent = "ME TOO!";
black_div.appendChild(div_elem2);
container.appendChild(black_div); // TO HERE. did anything change?

const btn = document.querySelector('#btn')
btn.onclick = () => alert('Hello world!')

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    alert('Hello World!')
})

const own_btn = document.querySelector('#own-btn');
own_btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });