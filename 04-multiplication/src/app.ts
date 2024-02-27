import fs from 'fs';

const numero = 7;
let outputMessage = '';
let message = `
============================
        Tabla del ${numero}
============================\n`;

for (let i = 1; i <= 10; i++) {
    outputMessage += `${numero} x ${[i]} = ${numero * i}\n`;
}

outputMessage = message + outputMessage;
console.log(outputMessage);

const outputPath = 'outputs/';
fs.mkdirSync(outputPath, { recursive: true });

// Guardar en un archivo el resultado de la tabla
fs.writeFileSync(`${outputPath}/tabla-${numero}.txt`, outputMessage);
console.log('Tabla guardada en outputs/tabla-' + numero + '.txt');