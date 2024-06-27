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

function removeElement() {
    const textExemple = document.querySelector('.text-exemple');
    textExemple.remove();
}


function llamada(valor) {
    const text = document.getElementById('Entrada').value;

    const result = encrypText(text);

    document.getElementById('TextResultado').innerText = result;

    removeElement();

}


function descrip(valor) {
    const text = document.getElementById('Entrada').value;

    const result = descypText(text);

    document.getElementById('TextResultado').innerText = result;

    removeElement();

}


function clipBoard() {
    let texto = document.getElementById('TextResultado').innerHTML;
    alert(texto);
    navigator.clipboard.writeText(texto);

    
}


