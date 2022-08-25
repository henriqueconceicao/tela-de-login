// Seleção de elementos
const generatePassword = document.querySelector("#generate-password")
const generatePasswordElement = document.querySelector("#generated-password")

// Funções
const getLetterLoweCase = () => {
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
const getNumber = () => {
    return Math.floor(Math.random() *10).toString();
}

const getSymbol = () =>{
    const symbol = "(){}[]=></.,@!#%$&+-*";
    return symbol[Math.floor(Math.random()* symbol.length)];
}

const password = (getLetterLoweCase,getLetterUpperCase,getNumber,getSymbol) => {
    let senha = ""
    const passwordLength = 10

    const generators = [
        getLetterLoweCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    ]

    for(i = 0; i < passwordLength; i = i+ 4){
        generators.forEach(() =>{
            const randomValue = generators[Math.floor(Math.random ()* generators.length)]();

            senha += randomValue;
        })
    }

    senha = senha.slice(0, passwordLength)
    generatePasswordElement.style.display = "block"
    generatePasswordElement.querySelector("h4").innerText = senha
}

// Eventos
generatePassword.addEventListener("click", () =>{
 password(getLetterLoweCase,
    getLetterUpperCase,
    getNumber,
    getSymbol)
})