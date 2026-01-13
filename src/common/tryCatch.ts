

export function tryCatch<Success, Error>(
    fn: () => Success, 
    onError: (err: unknown) => Error): Success | Error {
    try {
        return fn();
    } catch (error){
        return onError(error);
    }
}