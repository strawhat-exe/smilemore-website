const text = `HEY THIS IS JA! HOW ARE YOU DOING? DID ANYONE ASK YOU THAT TODAY? HOPEFULLY YOU HAD A BLESSED DAY. WISHING THAT IT WAS FULL OF ABUNDANCE OF LOVE, LAUGHS, AND SMILES. IF YOU ARE FEELING DOWN, ALWAYS REMEMBER THAT YOU ARE IN THIS VERY MOMENT FOR A REASON. ALL THE BULLSHIT THAT LIFE MAY THROW AT YOU, JUST KNOW THAT AT THE END OF THE DAY IS NIGHT. PUTANGINA MO HAYOP KA. ANONG GNAGWA MO DTO? WLA NA. HULI KA AGAD.. ALAM KO NA, NA PNUNTA KA DTO.. WLA HULI KNA MARITES 

- LOVE, JA.`;

const typingElement = document.querySelector('.typing-animation');
let index = 0;
const baseTypingSpeed = 1;

function getRandomDelay() {
    return Math.random() * 100;
}

function getPunctuationDelay(char) {
    if (/[.,!]/.test(char)) {
        return 200 + getRandomDelay();
    }
    return getRandomDelay();
}

function typeText() {
    if (index < text.length) {
        const currentChar = text.charAt(index);
        typingElement.innerHTML += currentChar;

        if (text.slice(index - 3, index + 1).includes("life")) {
            const span = typingElement.querySelector('.underline');
            if (span) {
                span.classList.add('active');
            }
        }

        index++;
        const typingSpeed = baseTypingSpeed + getPunctuationDelay(currentChar);
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(() => {
            typingElement.innerHTML = '';
            index = 0;
            typeText();
        }, 2000);
    }
}

setTimeout(() => typeText(), 1000);
