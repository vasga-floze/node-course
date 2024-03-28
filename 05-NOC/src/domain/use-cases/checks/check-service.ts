import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface ICheckServiceUseCase {
    execute(url: string): Promise<boolean>;
}

type SuccessCallback = (() => void) | undefined;
type ErrorCallback = ((error: string) => void) | undefined;

export class CheckService implements ICheckServiceUseCase {

    constructor(
        private readonly logRepository: LogRepository,
        private readonly successCalback: SuccessCallback,
        private readonly errorCalback: ErrorCallback
    ) { }

    public async execute(url: string): Promise<boolean> {
        try {
            const req = await fetch(url);
            if (!req.ok) {
                throw new Error(`Invalid URL ${url}`);
            }

            //se crea una instancia de la entidad y se le pasan los dos parametros
            const log = new LogEntity({
                message: `Service ${url} working`,
                level: LogSeverityLevel.low,
                origin: 'check-service.ts'
            });
            //se manda a guardar
            this.logRepository.saveLog(log);

            //evaluar si existe y luego mandar a llamar
            this.successCalback && this.successCalback();

            return true;

        } catch (error) {
            const errorMessage = `${url} is not ok. ${error}`;
            const log = new LogEntity({
                message: `Service ${url} is not working`,
                level: LogSeverityLevel.high,
                origin: 'check-service.ts'
            });
            this.logRepository.saveLog(log);
            //evaluar si existe y luego mandar a llamar
            this.errorCalback && this.errorCalback(errorMessage);
            return false;
        }
    }

}