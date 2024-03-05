import fs from 'fs';
import { yarg } from "./config/plugins/args.plugin"

const { b: base, l: limit, s: showTable } = yarg;
let outputMessage = '';
let message = `
============================
        Tabla del ${base}
============================\n`;

for (let i = 1; i <= limit; i++) {
    outputMessage += `${base} x ${[i]} = ${base * i}\n`;
}

outputMessage = message + outputMessage;

if (showTable) {
    console.log(outputMessage);
}

const outputPath = 'outputs/';
fs.mkdirSync(outputPath, { recursive: true });

// Guardar en un archivo el resultado de la tabla
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log('Tabla guardada en outputs/tabla-' + base + '.txt');