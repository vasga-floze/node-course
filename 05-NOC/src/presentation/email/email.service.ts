import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/env.plugings';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';
import { LogRepository } from '../../domain/repository/log.repository';

interface SendMailOptions {
    to: string | string[];
    subject: string;
    htmlBody: string;
    attachements?: Attachement[];
}

interface Attachement {
    filename: string;
    path: string;
}


export class EmailService {

    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY,
        }
    });

    constructor(
        //inyeccion de dependecias
        private readonly logRepository: LogRepository,
    ) { }


    async sendEmail(options: SendMailOptions): Promise<boolean> {

        const { to, subject, htmlBody, attachements = [] } = options;

        try {

            const sentInformation = await this.transporter.sendMail({
                to: to,
                subject: subject,
                html: htmlBody,
                attachments: attachements,
            });

            //console.log(sentInformation);
            //grabar un log por correo exitoso enviado
            const log = new LogEntity({
                level: LogSeverityLevel.low,
                message: 'Email sent',
                origin: 'email.service.ts',
            })
            this.logRepository.saveLog(log);

            return true;
        } catch (error) {
            //grabar un log por correo no enviado
            const log = new LogEntity({
                level: LogSeverityLevel.high,
                message: 'Email not sent',
                origin: 'email.service.ts',
            })
            this.logRepository.saveLog(log);
            return false;
        }

    }

    async sendEmailWithFileSystemLogs(to: string | string[]) {
        const subject = 'Logs del servidor';
        const htmlBody = `
            <h3>Logs de sistema - NOC</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque nisi, sollicitudin id ante sed, bibendum mollis velit non veniam ullamco ex eu laborum deserunt est amet elit nostrud sit. Dolore ullamco duis in ut deserunt. Amet sit aliqua esse anim fugiat ut eu excepteur veniam incididunt occaecat sit irure aliquip.</p>
            <p>Ver logs adjuntos</p>
            
        `
        const attachements: Attachement[] = [
            { filename: 'logs-all.log', path: './logs/logs-all.log' },
            { filename: 'logs-high.log', path: './logs/logs-high.log' },
            { filename: 'logs-medium.log', path: './logs/logs-medium.log' },
        ];

        return this.sendEmail({
            to, subject, attachements, htmlBody
        });

    }

}