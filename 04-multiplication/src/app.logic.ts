import fs from 'fs';

const base = 7;
let outputMessage = '';
let message = `
============================
        Tabla del ${base}
============================\n`;

for (let i = 1; i <= 10; i++) {
    outputMessage += `${base} x ${[i]} = ${base * i}\n`;
}

outputMessage = message + outputMessage;
console.log(outputMessage);

const outputPath = 'outputs/';
fs.mkdirSync(outputPath, { recursive: true });

// Guardar en un archivo el resultado de la tabla
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log('Tabla guardada en outputs/tabla-' + base + '.txt');