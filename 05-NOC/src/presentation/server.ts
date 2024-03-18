import { CronService } from "./cron/cron-service";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { LogRepositoryImpl } from "../infraestructure/repositories/log-repository.impl";
import { FileSystemDataSource } from "../infraestructure/datasources/file-system.datasource";


//la instancia que se va a mandar a todos los use cases que puedan requerir el repositorio
const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDataSource(),
);

export class Server {

    //punto de entrada
    public static start() {

        console.log('Server started...');
        //mandar email
         

        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'http://google.com/';
        //         new CheckService(
        //             fileSystemLogRepository,
        //             () => console.log(`${url} is ok`),
        //             (error) => console.log(error)
        //         ).execute(url);
        //         //new CheckService().execute('http://localhost:3000/');
        //     }
        // );
    }
}