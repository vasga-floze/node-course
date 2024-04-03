import { CronService } from "./cron/cron-service";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { LogRepositoryImpl } from "../infraestructure/repositories/log-repository.impl";
import { FileSystemDataSource } from "../infraestructure/datasources/file-system.datasource";
import { EmailService } from "./email/email.service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { MongoLogDatasource } from "../infraestructure/datasources/mongo-log.datasource";
import { LogSeverityLevel } from "../domain/entities/log.entity";
import { PostgresLogDatasource } from "../infraestructure/datasources/posgres-log.datasource";
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";


//instancias de los usecase con diferentes datasources
const fsLogRepository = new LogRepositoryImpl(
    new FileSystemDataSource()
);
const mongoLogRepository = new LogRepositoryImpl(
    new MongoLogDatasource(),
);
const postgresLogRepository = new LogRepositoryImpl(
    new PostgresLogDatasource(),
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
        //const logs = await logRepository.getLogs(LogSeverityLevel.high);
        //console.log(logs);

        //crear log en el datasource (db) elegido
        CronService.createJob(
            '*/5 * * * * *',
            () => {
                const url = 'https://google.com';
                //usando el caso de uso de multiples datasources
                new CheckServiceMultiple(
                    [fsLogRepository, postgresLogRepository, mongoLogRepository],
                    () => console.log(`${url} is ok`),
                    (error) => console.log(error),
                ).execute(url);
            }
        );
    };
}