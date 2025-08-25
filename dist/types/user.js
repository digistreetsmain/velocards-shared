"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KYCLevel = exports.KYCStatus = exports.UserStatus = void 0;
var UserStatus;
(function (UserStatus) {
    UserStatus["PENDING"] = "PENDING";
    UserStatus["ACTIVE"] = "ACTIVE";
    UserStatus["SUSPENDED"] = "SUSPENDED";
    UserStatus["CLOSED"] = "CLOSED";
})(UserStatus || (exports.UserStatus = UserStatus = {}));
var KYCStatus;
(function (KYCStatus) {
    KYCStatus["UNVERIFIED"] = "UNVERIFIED";
    KYCStatus["PENDING_KYC"] = "PENDING_KYC";
    KYCStatus["KYC_APPROVED"] = "KYC_APPROVED";
    KYCStatus["KYC_REJECTED"] = "KYC_REJECTED";
})(KYCStatus || (exports.KYCStatus = KYCStatus = {}));
var KYCLevel;
(function (KYCLevel) {
    KYCLevel["BASIC"] = "BASIC";
    KYCLevel["ENHANCED"] = "ENHANCED";
    KYCLevel["FULL"] = "FULL";
})(KYCLevel || (exports.KYCLevel = KYCLevel = {}));
