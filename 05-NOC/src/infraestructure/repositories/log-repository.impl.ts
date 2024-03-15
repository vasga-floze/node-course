import { LogDataSource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { LogRepository } from "../../domain/repository/log.repository";

export class LogRepositoryImpl implements LogRepository {

    //inyeccion de dependencia
    constructor(
        private readonly logDatasource: LogDataSource, // <-- cambiarlo por cualquier otro datasource siempre y cuando implemente los metodos de la clase abstracta
    ) { }

    async saveLog(log: LogEntity): Promise<void> {
        this.logDatasource.saveLog(log);
    }

    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        return this.logDatasource.getLogs(severityLevel);
    }

}