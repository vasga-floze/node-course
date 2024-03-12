//el repository es quien va a permitir llamar el datasource
import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

//obligar el comportamiento de otras clases mediante esta clase abstracta
export abstract class LogRepository {
    abstract saveLog(log: LogEntity): Promise<void>;
    abstract getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]>;
}