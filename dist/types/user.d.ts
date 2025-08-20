export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    status: UserStatus;
    kycStatus: KYCStatus;
    createdAt: Date;
    updatedAt: Date;
}
export declare enum UserStatus {
    PENDING = "PENDING",
    ACTIVE = "ACTIVE",
    SUSPENDED = "SUSPENDED",
    CLOSED = "CLOSED"
}
export declare enum KYCStatus {
    NOT_STARTED = "NOT_STARTED",
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED"
}
//# sourceMappingURL=user.d.ts.map