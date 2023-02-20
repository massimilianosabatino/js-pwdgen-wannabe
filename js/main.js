// Definizione nome variabili
const userName = prompt("Qual'è il tuo nome?");
const userSurname = prompt("Qual'è il tuo cognome?");
let userColor = prompt("Qual'è il tuo colore preferito?")
const passwordClassNumber = 89;

// Concatena le risposte in una nuova variabile
let passwordGenerated = `${userName}${userSurname}${userColor}${passwordClassNumber}`;

// Output in console
console.log(passwordGenerated);

// Output in pagina
document.querySelector('.-ms-password-field').innerHTML = passwordGenerated;

// Aggiunta alternative di password
/* Definizione nuova variabile */
passwordGeneratedAlternative = passwordGenerated + '-2023';

//Output in pagina
document.getElementById('alternative-password').innerHTML = passwordGeneratedAlternative;

// Output in console
console.log(passwordGeneratedAlternative);

