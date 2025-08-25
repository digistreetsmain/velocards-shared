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

export enum UserStatus {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
  CLOSED = 'CLOSED'
}

export enum KYCStatus {
  UNVERIFIED = 'UNVERIFIED',
  PENDING_KYC = 'PENDING_KYC',
  KYC_APPROVED = 'KYC_APPROVED',
  KYC_REJECTED = 'KYC_REJECTED'
}

export enum KYCLevel {
  BASIC = 'BASIC',
  ENHANCED = 'ENHANCED',
  FULL = 'FULL'
}