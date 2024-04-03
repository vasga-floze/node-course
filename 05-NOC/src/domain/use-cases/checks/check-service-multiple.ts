import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface ICheckServiceMultipleUseCase {
    execute(url: string): Promise<boolean>;
}

type SuccessCallback = (() => void) | undefined;
type ErrorCallback = ((error: string) => void) | undefined;

export class CheckServiceMultiple implements ICheckServiceMultipleUseCase {

    constructor(
        private readonly logRepository: LogRepository[],
        private readonly successCalback: SuccessCallback,
        private readonly errorCalback: ErrorCallback
    ) { }

    //
    private callLogs(log: LogEntity) {
        this.logRepository.forEach(logRepository =>{
            logRepository.saveLog(log);
        });
    }

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
            this.callLogs(log);

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
            this.callLogs(log);
            //evaluar si existe y luego mandar a llamar
            this.errorCalback && this.errorCalback(errorMessage);
            return false;
        }
    }

}