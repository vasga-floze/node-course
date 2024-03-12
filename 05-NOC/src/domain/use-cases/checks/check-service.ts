
interface ICheckServiceUseCase {
    execute(url: string): Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = (error: string) => void;

export class CheckService implements ICheckServiceUseCase {

    constructor(
        private readonly successCalback: SuccessCallback,
        private readonly errorCalback: ErrorCallback
    ) { }

    public async execute(url: string): Promise<boolean> {
        try {
            const req = await fetch(url);
            if (!req.ok) {
                throw new Error(`Invalid URL ${url}`);
            }

            this.successCalback();

            return true;

        } catch (error) {

            console.log(`${error}`);

            this.errorCalback(`${error}`);
            return false;
        }
    }

}