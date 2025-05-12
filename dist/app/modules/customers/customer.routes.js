"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("./customer.controller");
const validationMiddleware_1 = require("../../middlewares/validationMiddleware");
const customer_validations_1 = require("./customer.validations");
const router = express_1.default.Router();
router
    .route("/")
    .post((0, validationMiddleware_1.validationMiddleWare)(customer_validations_1.customerZodValidation.customerZodValidationSchema), customer_controller_1.customerController.createCustomer)
    .get(customer_controller_1.customerController.getAllCustomers);
router
    .route("/:customerId")
    .get(customer_controller_1.customerController.getCustomerById)
    .put((0, validationMiddleware_1.validationMiddleWare)(customer_validations_1.customerZodValidation.updateCustomerZodValidationSchema), customer_controller_1.customerController.updateCustomerById)
    .delete(customer_controller_1.customerController.deleteCustomerById);
exports.CustomerRoutes = router;
