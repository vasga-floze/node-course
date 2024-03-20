import { CronService } from "./cron/cron-service";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { LogRepositoryImpl } from "../infraestructure/repositories/log-repository.impl";
import { FileSystemDataSource } from "../infraestructure/datasources/file-system.datasource";
import { EmailService } from "./email/email.service";


//la instancia que se va a mandar a todos los use cases que puedan requerir el repositorio
const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDataSource(),
);

export class Server {

    //punto de entrada
    public static start() {

        console.log('Server started...');
        //mandar email
        const emailService = new EmailService();
        // emailService.sendEmail({
        //     to: 'gabriela.floze@gmail.com',
        //     subject: 'Prueba de correo',
        //     htmlBody: `
        //     <h3>Logs de sistema - NOC</h3>
        //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque nisi, sollicitudin id ante sed, bibendum mollis</p>
        //     <p>Ver logs adjuntos</p>
        //     `
        // });


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