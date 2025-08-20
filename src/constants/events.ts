export const EVENT_CONSTANTS = {
  // Event versioning
  DEFAULT_EVENT_VERSION: 1,
  
  // Performance limits
  MAX_EVENTS_PER_QUERY: 10000,
  DEFAULT_EVENTS_LIMIT: 100,
  BATCH_INSERT_SIZE: 1000,
  
  // Retry configuration
  MAX_RETRY_ATTEMPTS: 3,
  RETRY_DELAY_MS: 1000,
  RETRY_BACKOFF_MULTIPLIER: 2,
  
  // Dead letter queue
  DLQ_MAX_RETRIES: 5,
  DLQ_RETENTION_DAYS: 30,
  
  // Cache configuration
  EVENT_CACHE_TTL_SECONDS: 300, // 5 minutes
  SNAPSHOT_CACHE_TTL_SECONDS: 3600, // 1 hour
  
  // Signature algorithm
  SIGNATURE_ALGORITHM: 'sha256',
  SIGNATURE_ENCODING: 'hex' as const,
  
  // Environment variable names
  ENV_KEYS: {
    EVENT_SIGNATURE_SECRET: 'EVENT_SIGNATURE_SECRET',
  },
} as const;

export const EVENT_ERROR_MESSAGES = {
  INVALID_AGGREGATE_ID: 'Invalid aggregate ID provided',
  INVALID_EVENT_TYPE: 'Invalid event type provided',
  SIGNATURE_VERIFICATION_FAILED: 'Event signature verification failed',
  EVENT_NOT_FOUND: 'Event not found',
  INVALID_EVENT_VERSION: 'Invalid event version',
  IMMUTABLE_EVENT: 'Events are immutable and cannot be modified',
  CONCURRENT_MODIFICATION: 'Concurrent modification detected',
  REPLAY_FAILED: 'Event replay failed',
  INVALID_TIMESTAMP: 'Invalid timestamp for event query',
} as const;

export const EVENT_METRICS = {
  // Metric names for monitoring
  EVENTS_CREATED: 'events.created',
  EVENTS_REPLAYED: 'events.replayed',
  EVENTS_FAILED: 'events.failed',
  EVENT_PROCESSING_TIME: 'events.processing_time',
  EVENT_REPLAY_TIME: 'events.replay_time',
  EVENT_SIGNATURE_TIME: 'events.signature_time',
  EVENT_BATCH_SIZE: 'events.batch_size',
} as const;