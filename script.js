function generarContrasena(longitud) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let contrasena = '';
    for (let i = 0; i < longitud; i++) {
        contrasena += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return contrasena;
}

function generarContrasenas() {
    const cantidad = document.getElementById('cantidad').value;
    const longitud = document.getElementById('longitud').value;
    let contrasenasHTML = '';
    for (let i = 0; i < cantidad; i++) {
        const contrasena = generarContrasena(longitud);
        for (const char of contrasena) {
            const color = 'hsl(' + Math.random() * 360 + ',90%, 70%)'; // Genera un color HSL aleatorio/ si bajas la segunda variable se aumenta la opacidad
            contrasenasHTML += `<span style="color: ${color};">${char}</span>`;
        }
        contrasenasHTML += '<br>'; // Añade un salto de línea entre contraseñas
    }
    document.getElementById('contrasenas').innerHTML = contrasenasHTML;
}