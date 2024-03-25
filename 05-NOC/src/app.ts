import { envs } from "./config/plugins/env.plugings";
import { MongoDatabase } from "./data/mongo/init";
import { LogModel } from "./data/mongo/models/log.model";
import { Server } from "./presentation/server";

(async () => {
    main();
})();

async function main() {

    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME
    })


    // // Crear una coleccion = tables y documento = registro
    // const newLog = await LogModel.create({
    //     message: 'Test message',
    //     origin: 'App.ts',
    //     level: 'low',

    // });

    const logs = await LogModel.find();
    console.log(logs[0].message);

    //Server.start();
    //console.log(envs);
}