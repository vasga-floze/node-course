import { CronService } from "./cron/cron-service";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { LogRepositoryImpl } from "../infraestructure/repositories/log-repository.impl";
import { FileSystemDataSource } from "../infraestructure/datasources/file-system.datasource";
import { EmailService } from "./email/email.service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { MongoLogDatasource } from "../infraestructure/datasources/mongo-log.datasource";
import { LogSeverityLevel } from "../domain/entities/log.entity";


//la instancia que se va a mandar a todos los use cases que puedan requerir el repositorio
const logRepository = new LogRepositoryImpl(
    // new FileSystemDataSource(),
    new MongoLogDatasource(),
);

const emailService = new EmailService();

export class Server {

    //punto de entrada
    public static async start() {

        console.log('Server started...');
        //mandar email
        // new SendEmailLogs(
        //     emailService,
        //     fileSystemLogRepository,
        // ).execute(
        //     ['gabriela.floze@gmail.com', 'gzelaya@trainingroots.xyz']
        // )

        // // enviando correo electronico con adjuntos
        //emailService.sendEmailWithFileSystemLogs(['gabriela.floze@gmail.com', 'gzelaya@trainingroots.xyz']);

        // emailService.sendEmail({
        //     to: '.@gmail.com',
        //     subject: 'Prueba de correo',
        //     htmlBody: `
        //     <h3>Logs de sistema - NOC</h3>
        //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque nisi, sollicitudin id ante sed, bibendum mollis</p>
        //     <p>Ver logs adjuntos</p>
        //     `
        // });

        //obtener los logs de la bd
        const logs = await logRepository.getLogs(LogSeverityLevel.low);
        console.log(logs);

        //crear log en mongo db
        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'https://google.com';

        //         new CheckService(
        //             logRepository,
        //             () => console.log(`${url} is ok`),
        //             (error) => console.log(error),
        //         ).execute(url);
        //     }
        // );
    };
}