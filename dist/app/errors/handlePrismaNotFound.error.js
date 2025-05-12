"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const handleNotFoundError = (err) => {
    const error = [
        {
            path: '',
            message: `Requested resource not found`,
        },
    ];
    return {
        statusCode: http_status_codes_1.StatusCodes.NOT_FOUND,
        message: 'Resource not found error',
        error,
    };
};
exports.default = handleNotFoundError;
