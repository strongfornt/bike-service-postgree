"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoute = void 0;
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("./service.controller");
const validationMiddleware_1 = require("../../middlewares/validationMiddleware");
const service_validation_1 = require("./service.validation");
const router = express_1.default.Router();
router
    .route("/")
    .post((0, validationMiddleware_1.validationMiddleWare)(service_validation_1.ServicesValidation.serviceZodValidationSchema), service_controller_1.ServicesController.createService)
    .get(service_controller_1.ServicesController.getAllServiceRecord);
router.route("/:serviceId").get(service_controller_1.ServicesController.getServicesById);
router
    .route("/:serviceId/complete")
    .put((0, validationMiddleware_1.validationMiddleWare)(service_validation_1.ServicesValidation.updateServiceRecordStatusValidationSchema), service_controller_1.ServicesController.updateServiceRecordStatusToComplete);
exports.ServiceRoute = router;
