import fs from 'fs';

export interface SaveFileUseCase {
    execute: (options: Options) => boolean;
}

export interface Options {
    fileContent: string;
    fileDestination?: string;
    fileName? : string;
}

export class SaveFile implements SaveFileUseCase {
    constructor(
        /*
            repository: StorageReposistory
        */
    ){}

    execute ({
        fileContent, 
        fileDestination = 'outputs', 
        fileName = 'table'
    }: Options) : boolean {

        try {
            fs.mkdirSync(fileDestination, { recursive: true });

            // Guardar en un archivo el resultado de la tabla
            fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
            return true;

        } catch (error) {
            console.error(error);
            return false;
        }
    }
}