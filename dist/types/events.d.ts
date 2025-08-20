export declare enum AggregateType {
    USER = "USER",
    CARD = "CARD",
    TRANSACTION = "TRANSACTION",
    BALANCE = "BALANCE"
}
export declare enum EventType {
    USER_CREATED = "USER_CREATED",
    USER_UPDATED = "USER_UPDATED",
    USER_ACTIVATED = "USER_ACTIVATED",
    USER_DEACTIVATED = "USER_DEACTIVATED",
    USER_KYC_COMPLETED = "USER_KYC_COMPLETED",
    CARD_CREATED = "CARD_CREATED",
    CARD_ACTIVATED = "CARD_ACTIVATED",
    CARD_FROZEN = "CARD_FROZEN",
    CARD_UNFROZEN = "CARD_UNFROZEN",
    CARD_TERMINATED = "CARD_TERMINATED",
    CARD_LIMIT_UPDATED = "CARD_LIMIT_UPDATED",
    TRANSACTION_INITIATED = "TRANSACTION_INITIATED",
    TRANSACTION_AUTHORIZED = "TRANSACTION_AUTHORIZED",
    TRANSACTION_DECLINED = "TRANSACTION_DECLINED",
    TRANSACTION_SETTLED = "TRANSACTION_SETTLED",
    TRANSACTION_REVERSED = "TRANSACTION_REVERSED",
    TRANSACTION_REFUNDED = "TRANSACTION_REFUNDED",
    BALANCE_INCREASED = "BALANCE_INCREASED",
    BALANCE_DECREASED = "BALANCE_DECREASED",
    BALANCE_FROZEN = "BALANCE_FROZEN",
    BALANCE_UNFROZEN = "BALANCE_UNFROZEN",
    BALANCE_TRANSFERRED = "BALANCE_TRANSFERRED"
}
export interface EventMetadata {
    causationId: string;
    correlationId: string;
    userId?: string;
    timestamp?: Date;
    version?: number;
}
export interface BaseEventData {
    aggregateId: string;
    aggregateType: AggregateType;
    eventType: string;
    eventVersion: number;
    eventData: Record<string, unknown>;
    metadata: EventMetadata;
}
export interface EventInterface {
    id: string;
    aggregateId: string;
    aggregateType: AggregateType;
    eventType: string;
    eventVersion: number;
    eventData: Record<string, unknown>;
    causationId: string;
    correlationId: string;
    userId: string | null;
    signature: string;
    createdAt: Date;
}
export interface CreateEventDto {
    aggregateId: string;
    aggregateType: AggregateType;
    eventType: string;
    eventVersion?: number;
    eventData: Record<string, unknown>;
    causationId: string;
    correlationId: string;
    userId?: string;
}
export interface EventFilter {
    aggregateId?: string;
    aggregateType?: AggregateType;
    eventType?: string;
    correlationId?: string;
    userId?: string;
    fromTimestamp?: Date;
    toTimestamp?: Date;
    limit?: number;
    offset?: number;
}
export interface EventReplayOptions {
    aggregateId: string;
    fromTimestamp?: Date;
    toTimestamp?: Date;
    eventTypes?: string[];
}
//# sourceMappingURL=events.d.ts.map