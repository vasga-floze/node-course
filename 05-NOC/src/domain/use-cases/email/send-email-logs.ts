import { EmailService } from '../../../presentation/email/email.service';
import { LogEntity, LogSeverityLevel } from '../../entities/log.entity';
import { LogRepository } from '../../repository/log.repository';


interface ISendLogEmailUseCase {
    execute: (to: string | string[]) => Promise<boolean>
}

//mandar los logs
export class SendEmailLogs implements ISendLogEmailUseCase {

    constructor(
        //inyeccion de dependecias
        private readonly emailService: EmailService,
        private readonly logRepository: LogRepository,
    ) { }

    async execute(to: string | string[]) {

        try {
            const sent = await this.emailService.sendEmailWithFileSystemLogs(to);
            if (!sent) {
                throw new Error('Email log not sent');
            }

            const log = new LogEntity({
                message: `Log email sent`,
                level: LogSeverityLevel.low,
                origin: 'send-email-logs.ts',
            })
            this.logRepository.saveLog(log);

            return true;
        } catch (error) {

            const log = new LogEntity({
                message: `${error}`,
                level: LogSeverityLevel.high,
                origin: 'send-email-logs.ts',
            })
            this.logRepository.saveLog(log);
            return false;
        }


    }


}