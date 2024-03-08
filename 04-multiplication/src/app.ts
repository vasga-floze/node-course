import { yarg } from "./config/plugins/args.plugin"
import { ServerApp } from "./presentation/server-app";

//funcion asincrona autoinvocada
(async () => {
    await main();
})();

//punto de entrada de la aplicacion
async function main() {
    const { b: base, l: limit, s: showTable, n: fileName, d: fileDestination } = yarg; //leer argumentos pasados por consola

    ServerApp.run({ base, limit, showTable, fileName, fileDestination });

}