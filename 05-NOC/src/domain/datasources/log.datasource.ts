//el datasource es como las reglas de negocio de como queremos que nuestra aplicacion funcione
import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

//obligar el comportamiento de otras clases mediante esta clase abstracta
export abstract class LogDataSource {
    abstract saveLog(log: LogEntity): Promise<void>;
    abstract getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]>;
}