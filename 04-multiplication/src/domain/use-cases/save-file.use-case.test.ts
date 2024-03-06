import fs from 'fs';
import { SaveFile } from './save-file.use-case';

describe('SaveFileUseCase', () => {

    // beforeEach(()=>{
    //     //limpia antes de la prueba
    //     fs.rmSync('outputs', {recursive: true});
    // })

    afterEach(()=>{
        //limpia despues de la prueba
        fs.rmSync('outputs', {recursive: true});
    })

    test('should save file with default values', () => {

        const saveFile = new SaveFile();
        const filePath = 'outputs/table.txt';

        const options = {
            fileContent: 'test content'
        }

        const result = saveFile.execute(options);
        //evaluar que se ha creado la carpeta y el archivo
        const fileExists = fs.existsSync(filePath); //ojo puede ser un falso positivo, que ya existia y no se ha creado con la funcion
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
        
        expect(result).toBe(true);
        expect(fileExists).toBe(true);
        expect(fileContent).toBe(options.fileContent);

    });
});