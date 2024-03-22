import { envs } from "./config/plugins/env.plugings";
import { MongoDatabase } from "./data/mongo/init";
import { Server } from "./presentation/server";

(async () => {
    main();
})();

async function main() {

    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName:envs.MONGO_DB_NAME
    })


    //Server.start();
    //console.log(envs);
}