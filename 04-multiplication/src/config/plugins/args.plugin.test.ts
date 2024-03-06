
const runCommand = async (args: string[]) => {
    process.argv = [...process.argv, ...args];
    const { yarg } = await import('./args.plugin');

    return yarg;
}

describe('Test ars.plugin.ts', () => {

    test('Should return default values', async()=> {

        const argv = await runCommand(['-b', '5']);
        //console.log(argv);

        expect(argv).toEqual(expect.objectContaining({
            b: 5,
            l: 10,
            s: false,
            n: 'multiplication-table',
            d: 'outputs'
        }));

    });
});