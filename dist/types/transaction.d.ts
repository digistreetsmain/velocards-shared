export interface Transaction {
    id: string;
    userId: string;
    cardId?: string;
    type: TransactionType;
    amount: string;
    currency: string;
    status: TransactionStatus;
    description?: string;
    metadata?: Record<string, unknown>;
    idempotencyKey?: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare enum TransactionType {
    DEPOSIT = "DEPOSIT",
    WITHDRAWAL = "WITHDRAWAL",
    CARD_FUNDING = "CARD_FUNDING",
    CARD_PURCHASE = "CARD_PURCHASE",
    CARD_REFUND = "CARD_REFUND",
    FEE = "FEE"
}
export declare enum TransactionStatus {
    PENDING = "PENDING",
    PROCESSING = "PROCESSING",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
    CANCELLED = "CANCELLED"
}
export interface CreateTransactionDto {
    type: TransactionType;
    amount: string;
    currency: string;
    cardId?: string;
    description?: string;
    metadata?: Record<string, unknown>;
    idempotencyKey: string;
}
//# sourceMappingURL=transaction.d.ts.map