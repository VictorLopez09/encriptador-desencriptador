# Encriptar & Desencriptar

Este proyecto proporciona una sencilla interfaz web para encriptar y desencriptar texto utilizando un cifrado de sustitución de caracteres.

## Descripción

El proyecto incluye una página HTML con un formulario para ingresar texto, botones para encriptar y desencriptar, y un área para mostrar el resultado. También se incluye una funcionalidad para copiar el texto encriptado o desencriptado al portapapeles.

## Estructura del Proyecto

- `index.html`: Contiene la estructura de la página web.
- `css/app.css`: Contiene los estilos para la página web.
- `js/app.js`: Contiene las funciones de JavaScript para encriptar, desencriptar y manejar la interfaz de usuario.

## Funcionalidades

### Encriptar

La función `encriptarTexto` toma un texto de entrada y reemplaza cada vocal por una cadena específica:

- `e` se reemplaza por `enter`
- `i` se reemplaza por `imes`
- `a` se reemplaza por `ai`
- `o` se reemplaza por `ober`
- `u` se reemplaza por `ufat`

### Desencriptar

La función `desencriptarTexto` toma un texto de entrada y reemplaza las cadenas específicas de vuelta a las vocales originales:

- `enter` se reemplaza por `e`
- `imes` se reemplaza por `i`
- `ai` se reemplaza por `a`
- `ober` se reemplaza por `o`
- `ufat` se reemplaza por `u`

### Copiar al Portapapeles

La función `copiarAlPortapapeles` copia el texto encriptado o desencriptado mostrado en la página al portapapeles del usuario.

## Cómo Usar

1. Clona el repositorio o descarga los archivos.
2. Abre `index.html` en un navegador web.
3. Ingresa el texto que deseas encriptar o desencriptar en el área de texto.
4. Haz clic en el botón "Encriptar" o "Desencriptar".
5. El resultado se mostrará en el área de resultados.
6. Para copiar el resultado al portapapeles, haz clic en el botón "Copiar".


## Licencia

Este proyecto está licenciado bajo la Licencia MIT.