export interface VirtualCard {
    id: string;
    userId: string;
    cardNumber: string;
    cvv: string;
    expiryMonth: number;
    expiryYear: number;
    balance: string;
    status: CardStatus;
    label?: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare enum CardStatus {
    ACTIVE = "ACTIVE",
    FROZEN = "FROZEN",
    CANCELLED = "CANCELLED"
}
export interface CreateCardDto {
    balance: string;
    label?: string;
}
export interface FreezeCardDto {
    cardId: string;
    reason?: string;
}
//# sourceMappingURL=card.d.ts.map