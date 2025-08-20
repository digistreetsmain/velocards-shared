export declare const API_VERSION = "v1";
export declare const DEFAULT_CURRENCY = "USD";
export declare const MIN_DEPOSIT_AMOUNT = "10.00";
export declare const MAX_DEPOSIT_AMOUNT = "10000.00";
export declare const MIN_CARD_BALANCE = "1.00";
export declare const MAX_CARD_BALANCE = "5000.00";
export declare const MAX_CARDS_PER_USER = 10;
export declare const ERROR_CODES: {
    readonly INSUFFICIENT_FUNDS: "INSUFFICIENT_FUNDS";
    readonly INVALID_AMOUNT: "INVALID_AMOUNT";
    readonly CARD_LIMIT_EXCEEDED: "CARD_LIMIT_EXCEEDED";
    readonly UNAUTHORIZED: "UNAUTHORIZED";
    readonly FORBIDDEN: "FORBIDDEN";
    readonly NOT_FOUND: "NOT_FOUND";
    readonly VALIDATION_ERROR: "VALIDATION_ERROR";
    readonly INTERNAL_ERROR: "INTERNAL_ERROR";
    readonly DUPLICATE_REQUEST: "DUPLICATE_REQUEST";
};
export declare const REDIS_KEYS: {
    readonly SESSION: (userId: string) => string;
    readonly LOCK: (resource: string) => string;
    readonly IDEMPOTENCY: (key: string) => string;
    readonly RATE_LIMIT: (userId: string) => string;
};
export * from './events';
//# sourceMappingURL=index.d.ts.map