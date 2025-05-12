"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const duplicate_error_1 = __importDefault(require("../errors/duplicate.error"));
const custome_error_1 = require("../errors/custome.error");
const handle_zod_error_1 = __importDefault(require("../errors/handle.zod.error"));
const config_1 = __importDefault(require("../config"));
const handlePrismaNotFound_error_1 = __importDefault(require("../errors/handlePrismaNotFound.error"));
const globalErrorHandler = (err, req, res, next) => {
    //setting  default error
    let statusCode = 500;
    let message = 'Something went wrong';
    let error = [
        {
            path: '',
            message: 'something went wrong',
        },
    ];
    if (err instanceof zod_1.ZodError) {
        const simpleFydError = (0, handle_zod_error_1.default)(err);
        statusCode = simpleFydError === null || simpleFydError === void 0 ? void 0 : simpleFydError.statusCode;
        message = simpleFydError === null || simpleFydError === void 0 ? void 0 : simpleFydError.message;
        error = simpleFydError === null || simpleFydError === void 0 ? void 0 : simpleFydError.error;
    }
    else if ((err === null || err === void 0 ? void 0 : err.code) === 'P2002') {
        const simpleFydError = (0, duplicate_error_1.default)(err);
        statusCode = simpleFydError === null || simpleFydError === void 0 ? void 0 : simpleFydError.statusCode;
        message = simpleFydError === null || simpleFydError === void 0 ? void 0 : simpleFydError.message;
        error = simpleFydError === null || simpleFydError === void 0 ? void 0 : simpleFydError.error;
    }
    else if ((err === null || err === void 0 ? void 0 : err.code) === 'P2025') {
        const simpleFydError = (0, handlePrismaNotFound_error_1.default)(err);
        statusCode = simpleFydError === null || simpleFydError === void 0 ? void 0 : simpleFydError.statusCode;
        message = simpleFydError === null || simpleFydError === void 0 ? void 0 : simpleFydError.message;
        error = simpleFydError === null || simpleFydError === void 0 ? void 0 : simpleFydError.error;
    }
    else if (err instanceof custome_error_1.CustomError) {
        statusCode = err === null || err === void 0 ? void 0 : err.statusCode;
        message = err === null || err === void 0 ? void 0 : err.message;
        error = [{
                path: '',
                message: err === null || err === void 0 ? void 0 : err.message,
            }];
    }
    else if (err instanceof Error) {
        message = err === null || err === void 0 ? void 0 : err.message;
        error = [{
                path: '',
                message: err === null || err === void 0 ? void 0 : err.message,
            }];
    }
    res.status(statusCode).json({
        success: false,
        message,
        statusCode,
        error,
        stack: config_1.default.env === 'development' ? err === null || err === void 0 ? void 0 : err.stack : null,
        // error: err,
    });
};
exports.default = globalErrorHandler;
//pattern
/*
  success
  message
  errorSources: [
    path:'',
    message: ''
  ]
  stack
 */ 
