import { CronService } from "./cron/cron-service";
import { CheckService } from "../domain/use-cases/checks/check-service";

export class Server {

    //punto de entrada
    public static start() {

        console.log('Server started...')

        CronService.createJob(
            '*/5 * * * * *',
            () => {
                new CheckService().execute('https://google.com');
            }
        );

        // CronService.createJob(
        //     '*/2 * * * * *',
        //     () => {
        //         const date = new Date();
        //         console.log('2 seconds', date);
        //     }
        // );

        // CronService.createJob(
        //     '*/3 * * * * *',
        //     () => {
        //         const date = new Date();
        //         console.log('3 seconds', date);
        //     }
        // );
    }
}