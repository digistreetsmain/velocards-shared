"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KYCStatus = exports.UserStatus = void 0;
var UserStatus;
(function (UserStatus) {
    UserStatus["PENDING"] = "PENDING";
    UserStatus["ACTIVE"] = "ACTIVE";
    UserStatus["SUSPENDED"] = "SUSPENDED";
    UserStatus["CLOSED"] = "CLOSED";
})(UserStatus || (exports.UserStatus = UserStatus = {}));
var KYCStatus;
(function (KYCStatus) {
    KYCStatus["NOT_STARTED"] = "NOT_STARTED";
    KYCStatus["PENDING"] = "PENDING";
    KYCStatus["APPROVED"] = "APPROVED";
    KYCStatus["REJECTED"] = "REJECTED";
})(KYCStatus || (exports.KYCStatus = KYCStatus = {}));
