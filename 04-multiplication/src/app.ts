import { yarg } from "./config/plugins/args.plugin"
import { ServerApp } from "./presentation/server-app";

(async()=>{
    await main();
})();

//punto de entrada de la aplicacion
async function main(){
    const { b: base, l: limit, s: showTable} = yarg; //leer argumentos pasados por consola
    
    ServerApp.run( {base, limit, showTable});
    
}