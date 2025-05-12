"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const bike_controller_1 = require("./bike.controller");
const validationMiddleware_1 = require("../../middlewares/validationMiddleware");
const bike_validation_1 = require("./bike.validation");
const router = express_1.default.Router();
router
    .route("/")
    .post((0, validationMiddleware_1.validationMiddleWare)(bike_validation_1.bikeValidationSchema.bikeValidationZodSchema), bike_controller_1.bikeController.createBike)
    .get(bike_controller_1.bikeController.getAllBike);
router.route('/:bikeId')
    .get(bike_controller_1.bikeController.getBike);
exports.bikeRoutes = router;
