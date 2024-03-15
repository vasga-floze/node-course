import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface ICheckServiceUseCase {
    execute(url: string): Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = (error: string) => void;

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
            const log = new LogEntity(`Service ${url} working`, LogSeverityLevel.low);
            //se manda a guardar
            this.logRepository.saveLog(log);

            this.successCalback();

            return true;

        } catch (error) {
            const errorMessage = `${url} is not ok. ${error}`;
            const log = new LogEntity(errorMessage, LogSeverityLevel.high);
            this.logRepository.saveLog(log);
            this.errorCalback(errorMessage);
            return false;
        }
    }

}