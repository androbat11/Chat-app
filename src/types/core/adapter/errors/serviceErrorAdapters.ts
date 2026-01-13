export type ErrorResponse<T> = {
    type: "error";
    errorCode: T; // Invalid Request, etc...
    message: string;
}
export type GenericRequestValidationError = ErrorResponse<"server-error"> & { errorCode: string; message: string };

export type InvalidRequestErrorMessage<T = GenericRequestValidationError> = {
    type: "invalid-request";
    errors: T[];
}

export type NotFoundErrorMessage<T = GenericRequestValidationError> = {
    type: "not-found";
    errors: T[];
}

