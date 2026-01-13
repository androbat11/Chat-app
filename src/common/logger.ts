// import { winston } from "winston";

// type LogLevel = "info" | "error" | "warn";

// export type ContextLogger<TContext extends object> = {
//     info(message: string, metadata?: object): void;
//     warn(message: string, metadata?: object): void;
//     error(message: string, metadata?: object): void;

//     with<TAdditionalContext extends object>(
//         context: TAdditionalContext
//     ): ContextLogger<TContext & TAdditionalContext>;

//     readonly _winston: winston.Logger;
// };

// function createLogger(service: string, level: LogLevel) {
//     const winstonLogger = winston.createLogger({
//         level,
//         format: winston.format.json(),
//         detaultMeta: { service: service },
//         transports: [new winston.transports.Console()],
//     })

//     return { winstonLogger }
    
// }

// function buildContextualLogger<TContext extends object>(
//     context: TContext,
// ): ContextLogger<TContext> {
//     const log = (level: LogLevel, message?: string, metadata?: object): void => {
//         const mergedContext = {
//             ...context,
//             metadata: metadata || {},
//         };

//         const winstonLogger = createLogger("", level).winstonLogger;
//         winstonLogger.log(level, message, mergedContext);
//     };

//     return {
//         info: (message: string, metadata?: object) => log("info", message, metadata),
//         warn: (message: string, metadata?: object) => log("warn", message, metadata),
//         error: (message: string, metadata?: object) => log("error", message, metadata),

//         with<TAdditional extends object>(context: TAdditional){
//             return buildContextualLogger<TContext>(context)
//         },

//         get _winston(){
//             return winstonLogger;
//         }
//     }
// }
