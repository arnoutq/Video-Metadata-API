export class CustomError extends Error {
    private statusCode: number;

    constructor(message: string, statusCode = 500) {
        super(message); // 'Error' breaks prototype chain here
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
    }
}