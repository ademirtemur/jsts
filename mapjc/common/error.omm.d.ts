export declare class ErrorOMM extends Error {
    private previous?;
    constructor(message: string | string[], previous?: ErrorOMM);
    static new(message: string | string[], previous?: ErrorOMM): ErrorOMM;
    static withPrev(message: string | string[], previous?: ErrorOMM): ErrorOMM;
    private joinErrors;
    printStack(): void;
    toString(): void;
}
