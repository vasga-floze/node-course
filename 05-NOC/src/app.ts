import { PrismaClient } from "@prisma/client";
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

    //Escribir en PosgreSQL
    const prisma = new PrismaClient();
    // const newLog = await prisma.logModel.create({
    //     data: {
    //         level: 'HIGH',
    //         message: 'Test message',
    //         origin: 'App.ts'
    //     }
    // });
    
    //Leer de PostgreSQL
    const logs = await prisma.logModel.findMany();
    console.log(logs)
    
    // Server.start();
}