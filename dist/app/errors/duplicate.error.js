"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleDuplicateError = (err) => {
    var _a, _b;
    const targetField = (_b = (_a = err === null || err === void 0 ? void 0 : err.meta) === null || _a === void 0 ? void 0 : _a.target) === null || _b === void 0 ? void 0 : _b[0];
    const error = [
        {
            path: '',
            message: `${targetField} is already exists`,
        },
    ];
    const statusCode = 400;
    return {
        statusCode,
        message: 'Duplicate error',
        error,
    };
};
exports.default = handleDuplicateError;
