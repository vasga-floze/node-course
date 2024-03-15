
export enum LogSeverityLevel {
    low = 'low',
    medium = 'medium',
    high = 'high',
}

export class LogEntity {
    public level: LogSeverityLevel; //Enum
    public message: string;
    public createdAt: Date;

    constructor(message: string, level: LogSeverityLevel) {
        this.message = message;
        this.level = level;
        this.createdAt = new Date();
    }

    //factory constructor
    //este metodo fromJson permite crear instancias basadas en el json: string
    static fromJson = (json: string): LogEntity => {
        const { message, level, createdAt } = JSON.parse(json);
        //en esta parte debe agregarse validaciones como el mensaje es requerido, etc 

        const log = new LogEntity(message, level);
        log.createdAt = new Date(createdAt);
        return log;

    };
}