"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventType = exports.AggregateType = void 0;
var AggregateType;
(function (AggregateType) {
    AggregateType["USER"] = "USER";
    AggregateType["CARD"] = "CARD";
    AggregateType["TRANSACTION"] = "TRANSACTION";
    AggregateType["BALANCE"] = "BALANCE";
})(AggregateType || (exports.AggregateType = AggregateType = {}));
var EventType;
(function (EventType) {
    // User events
    EventType["USER_CREATED"] = "USER_CREATED";
    EventType["USER_UPDATED"] = "USER_UPDATED";
    EventType["USER_ACTIVATED"] = "USER_ACTIVATED";
    EventType["USER_DEACTIVATED"] = "USER_DEACTIVATED";
    EventType["USER_KYC_COMPLETED"] = "USER_KYC_COMPLETED";
    // Card events
    EventType["CARD_CREATED"] = "CARD_CREATED";
    EventType["CARD_ACTIVATED"] = "CARD_ACTIVATED";
    EventType["CARD_FROZEN"] = "CARD_FROZEN";
    EventType["CARD_UNFROZEN"] = "CARD_UNFROZEN";
    EventType["CARD_TERMINATED"] = "CARD_TERMINATED";
    EventType["CARD_LIMIT_UPDATED"] = "CARD_LIMIT_UPDATED";
    // Transaction events
    EventType["TRANSACTION_INITIATED"] = "TRANSACTION_INITIATED";
    EventType["TRANSACTION_AUTHORIZED"] = "TRANSACTION_AUTHORIZED";
    EventType["TRANSACTION_DECLINED"] = "TRANSACTION_DECLINED";
    EventType["TRANSACTION_SETTLED"] = "TRANSACTION_SETTLED";
    EventType["TRANSACTION_REVERSED"] = "TRANSACTION_REVERSED";
    EventType["TRANSACTION_REFUNDED"] = "TRANSACTION_REFUNDED";
    // Balance events
    EventType["BALANCE_INCREASED"] = "BALANCE_INCREASED";
    EventType["BALANCE_DECREASED"] = "BALANCE_DECREASED";
    EventType["BALANCE_FROZEN"] = "BALANCE_FROZEN";
    EventType["BALANCE_UNFROZEN"] = "BALANCE_UNFROZEN";
    EventType["BALANCE_TRANSFERRED"] = "BALANCE_TRANSFERRED";
})(EventType || (exports.EventType = EventType = {}));
