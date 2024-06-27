function encrypText(TextEncrip) {
    let TextChar = TextEncrip.split('');
    let encryptedText = '';

    const letters = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    for (let i = 0; i < TextChar.length; i++) {
        const char = TextChar[i];
        if (letters[char]) {
            encryptedText += letters[char];
        } else {
            encryptedText += char;
        }
    }

    return encryptedText;
}

function descypText(TextDencrip) {

    let TextDescrip = TextDencrip;

    const letters =
        [
            ['e', 'enter'],
            ['i', 'imes'],
            ['a', 'ai'],
            ['o', 'ober'],
            ['u', 'ufat']
        ];

    for (let i = 0; i < letters.length; i++) {

        const element = letters[i];
        const regex = new RegExp(element[1], 'g');
        TextDescrip = TextDescrip.replace(regex, element[0]);

    }
    return TextDescrip;
}

function removeElement(text) {
    const textExemple = document.querySelector('.text-exemple');
    if (textExemple) {
        textExemple.remove();
    }

    const btnCopy = document.querySelector('#copiar');
    btnCopy.hidden = false;

}


function llamada() {
    const text = document.getElementById('Entrada').value;
    const result = encrypText(text);
    actualizarResultado(result);
    removeElement(result);
}

function descrip() {
    const text = document.getElementById('Entrada').value;
    const result = descypText(text);
    actualizarResultado(result);
    removeElement();
}

function actualizarResultado(resultado) {
    document.getElementById('TextResultado').innerText = resultado;
}

function clipBoard() {
    const texto = document.getElementById('TextResultado').innerText;

    navigator.clipboard.writeText(texto);


}


