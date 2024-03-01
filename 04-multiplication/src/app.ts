import { yarg } from "./config/plugins/args.plugin"

// console.log(process.argv);

// console.log(yarg);

(async()=>{
    await main();
})();

async function main(){
    const { b: base, l: limit, s: showTable, n: fileName, d: fileDestination } = yarg;
    
    console.log(yarg)
}