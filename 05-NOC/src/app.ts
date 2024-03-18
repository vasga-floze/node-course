import { envs } from "./config/plugins/env.plugings";
import { Server } from "./presentation/server";

(async () => {
    main();
})();

function main() {
    Server.start();
    //console.log(envs);
}