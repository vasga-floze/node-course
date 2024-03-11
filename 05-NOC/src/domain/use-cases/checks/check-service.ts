
interface ICheckServiceUseCase {
    execute(url: string): Promise<boolean>;
}

export class CheckService implements ICheckServiceUseCase {

    public async execute(url: string): Promise<boolean> {
        try {
            const req = await fetch(url);
            if (!req.ok) {
                throw new Error(`Invalid URL ${url}`);
            }
            console.log(`${url} is ok`)

            return true;

        } catch (error) {

            console.log(`${error}`);

            return false;
        }
    }

}