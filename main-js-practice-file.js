const output = document.querySelector('.output');
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

function countdown() {
    for (i = 10; i >= 0; i--) {
        const para = document.createElement('p');
        output.appendChild(para);
        if (i == 0) {
            para.textContent = 'Blast off!'
        } else if (i == 10) {
            para.textContent = `Countdown ${i}`
        } else {
            para.textContent = i
        }
        
    }
}

function getGuestlist(people) {
    for (i = 0; i < people.length; i++) {
        if (people[i] == 'Phil' || people[i] == 'Lola') {
            refused.textContent += `${people[i]}, `;
        } else {
            admitted.textContent += `${people[i]}, `;
        }
    }
    refused.textContent = `${refused.textContent.slice(0, refused.textContent.length - 2)}.`;
    admitted.textContent = `${admitted.textContent.slice(0, admitted.textContent.length - 2)}.`;
}

function getEvenNumbers(last_val=10) {
    for (i = 1; i <= last_val; i++) {
        if (i % 2 == 0) console.log(i);
    }
}

function changeForWhile() {
    let i = 0;
    while (i < 3) {
        alert( `number ${i}!` );
        i++;
    }
}

function repeatUntilCorrect() {
    let correctValue = false;
    while (!correctValue) {
        number = prompt('Write a number higher than 100')
        if (number > 100) {
            alert('Thanks for cooperation');
            break;
        }
    }
}

function repeatUntilCorrectV2() {
    // This function does the same, but loop also cancels if user returns empty string
    let num;
    do {
        num = prompt('Write a number higher than 100');
    } while (num <= 100 && num)
}


function getSinglePrimeNumber(n=10) {
    for (i = 2; i <= n; i++) {
        if (i > n/2) {
            return n
        } else if (n%i == 0) {
            return null
        }
    }
}

function getPrimeNumbers(n=10) {
    let prime_numbers = [];
    nextPrime:
    for (i = 2; i <= n; i++) {
        for (j = 2; j < i; j++) {
            if (i%j == 0) continue nextPrime;
        } 
        prime_numbers.push(i)
    }
    console.log(prime_numbers)
}
