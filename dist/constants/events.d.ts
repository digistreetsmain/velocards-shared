export declare const EVENT_CONSTANTS: {
    readonly DEFAULT_EVENT_VERSION: 1;
    readonly MAX_EVENTS_PER_QUERY: 10000;
    readonly DEFAULT_EVENTS_LIMIT: 100;
    readonly BATCH_INSERT_SIZE: 1000;
    readonly MAX_RETRY_ATTEMPTS: 3;
    readonly RETRY_DELAY_MS: 1000;
    readonly RETRY_BACKOFF_MULTIPLIER: 2;
    readonly DLQ_MAX_RETRIES: 5;
    readonly DLQ_RETENTION_DAYS: 30;
    readonly EVENT_CACHE_TTL_SECONDS: 300;
    readonly SNAPSHOT_CACHE_TTL_SECONDS: 3600;
    readonly SIGNATURE_ALGORITHM: "sha256";
    readonly SIGNATURE_ENCODING: "hex";
    readonly ENV_KEYS: {
        readonly EVENT_SIGNATURE_SECRET: "EVENT_SIGNATURE_SECRET";
    };
};
export declare const EVENT_ERROR_MESSAGES: {
    readonly INVALID_AGGREGATE_ID: "Invalid aggregate ID provided";
    readonly INVALID_EVENT_TYPE: "Invalid event type provided";
    readonly SIGNATURE_VERIFICATION_FAILED: "Event signature verification failed";
    readonly EVENT_NOT_FOUND: "Event not found";
    readonly INVALID_EVENT_VERSION: "Invalid event version";
    readonly IMMUTABLE_EVENT: "Events are immutable and cannot be modified";
    readonly CONCURRENT_MODIFICATION: "Concurrent modification detected";
    readonly REPLAY_FAILED: "Event replay failed";
    readonly INVALID_TIMESTAMP: "Invalid timestamp for event query";
};
export declare const EVENT_METRICS: {
    readonly EVENTS_CREATED: "events.created";
    readonly EVENTS_REPLAYED: "events.replayed";
    readonly EVENTS_FAILED: "events.failed";
    readonly EVENT_PROCESSING_TIME: "events.processing_time";
    readonly EVENT_REPLAY_TIME: "events.replay_time";
    readonly EVENT_SIGNATURE_TIME: "events.signature_time";
    readonly EVENT_BATCH_SIZE: "events.batch_size";
};
//# sourceMappingURL=events.d.ts.map