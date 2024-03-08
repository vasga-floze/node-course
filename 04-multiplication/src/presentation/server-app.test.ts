import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';
import { ServerApp } from './server-app';
//

describe('Server App', () => {

    //inicializar valores a utilizar en diferentes pruebas
    const options = {
        base: 2,
        limit: 10,
        showTable: false,
        fileDestination: 'test-file-destination',
        fileName: 'test-file-name',
    };

    test('Should create a ServerApp instance', () => {
        const serverApp = new ServerApp();

        //se verifica que serverApp sea una instancia de ServerApp
        expect(serverApp).toBeInstanceOf(ServerApp);
        //se verifica que run sea funcion de ServerApp
        expect(typeof ServerApp.run).toBe('function');

    });

    test('Should run ServerApp with options', () => {

        // const logSpy = jest.spyOn(console, 'log');
        // const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
        // const SaveFileSpy = jest.spyOn(SaveFile.prototype, 'execute');

        // ServerApp.run(options);

        // //logSpy
        // expect(logSpy).toHaveBeenCalledTimes(2);
        // expect(logSpy).toHaveBeenCalledWith('server running...');
        // expect(logSpy).toHaveBeenLastCalledWith('File created with name test-file-name in test-file-destination');

        // //createTableSpy
        // expect(createTableSpy).toHaveBeenCalledTimes(1);
        // expect(createTableSpy).toHaveBeenCalledWith({
        //     base: options.base,
        //     limit: options.limit
        // });

        // //SaveFileSpy
        // expect(SaveFileSpy).toHaveBeenCalledTimes(1);
        // expect(SaveFileSpy).toHaveBeenCalledWith({
        //     fileContent: expect.any(String),
        //     fileDestination: options.fileDestination,
        //     fileName: options.fileName
        // });

    });

    test('Should run with custom values mocked', () => {

        const logMock = jest.fn();
        const logErrorMock = jest.fn();
        const createMock = jest.fn().mockReturnValue('1 x 2 = 2');
        const saveFileMock = jest.fn().mockReturnValue(true);

        console.log = logMock;
        console.error = logErrorMock;
        CreateTable.prototype.execute = createMock;
        SaveFile.prototype.execute = saveFileMock;

        ServerApp.run(options);
        expect(logMock).toHaveBeenCalledWith("server running...");
        expect(createMock).toHaveBeenCalledWith({ "base": options.base, "limit": options.limit });
        expect(saveFileMock).toHaveBeenCalledWith({
            fileContent: '1 x 2 = 2',
            fileDestination: 'test-file-destination',
            fileName: 'test-file-name'
        });

        expect(logMock).toHaveBeenCalledWith('File created with name test-file-name in test-file-destination');
        expect(logErrorMock).not.toHaveBeenCalled();

    });

});