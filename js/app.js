// Función para encriptar el texto
function encriptarTexto(textoParaEncriptar) {
    let caracteres = textoParaEncriptar.split('');
    let textoEncriptado = '';

    const letras = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    for (let i = 0; i < caracteres.length; i++) {
        const caracter = caracteres[i];
        if (letras[caracter]) {
            textoEncriptado += letras[caracter];
        } else {
            textoEncriptado += caracter;
        }
    }

    return textoEncriptado;
}

// Función para desencriptar el texto
function desencriptarTexto(textoParaDesencriptar) {
    let textoDesencriptado = textoParaDesencriptar;

    const letras = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ];

    for (let i = 0; i < letras.length; i++) {
        const elemento = letras[i];
        const regex = new RegExp(elemento[1], 'g');
        textoDesencriptado = textoDesencriptado.replace(regex, elemento[0]);
    }
    return textoDesencriptado;
}

// Función para eliminar un elemento y mostrar el botón de copiar
function eliminarElemento() {
    const ejemploTexto = document.querySelector('.ejemplo-texto');
    if (ejemploTexto) {
        ejemploTexto.remove();
    }

    const botonCopiar = document.querySelector('#copiar');
    botonCopiar.hidden = false;
}

// Función para encriptar el texto ingresado y actualizar el resultado
function encriptar() {
    const texto = document.getElementById('Entrada').value;
    const resultado = encriptarTexto(texto);
    actualizarResultado(resultado);
    eliminarElemento();
}

// Función para desencriptar el texto ingresado y actualizar el resultado
function desencriptar() {
    const texto = document.getElementById('Entrada').value;
    const resultado = desencriptarTexto(texto);
    actualizarResultado(resultado);
    eliminarElemento();
}

// Función para actualizar el elemento de resultado con el texto proporcionado
function actualizarResultado(resultado) {
    document.getElementById('TextoResultado').innerText = resultado;
}

// Función para copiar el texto del resultado al portapapeles
function copiarAlPortapapeles() {
    const texto = document.getElementById('TextoResultado').innerText;
    navigator.clipboard.writeText(texto);
    alert('Se copio al portapapeles')
}


