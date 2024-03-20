import { CronService } from "./cron/cron-service";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { LogRepositoryImpl } from "../infraestructure/repositories/log-repository.impl";
import { FileSystemDataSource } from "../infraestructure/datasources/file-system.datasource";
import { EmailService } from "./email/email.service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";


//la instancia que se va a mandar a todos los use cases que puedan requerir el repositorio
const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDataSource(),
);

const emailService = new EmailService();

export class Server {

    //punto de entrada
    public static start() {

        console.log('Server started...');
        //mandar email
        new SendEmailLogs(
            emailService,
            fileSystemLogRepository,
        ).execute(
            ['gabriela.floze@gmail.com', 'gzelaya@trainingroots.xyz']
        )

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

    }
}