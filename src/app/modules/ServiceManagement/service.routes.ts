import express from "express";
import { ServicesController } from "./service.controller";
import { validationMiddleWare } from "../../middlewares/validationMiddleware";
import { ServicesValidation } from "./service.validation";
const router = express.Router();

router
  .route("/")
  .post(
    validationMiddleWare(ServicesValidation.serviceZodValidationSchema),
    ServicesController.createService
  )
  .get(ServicesController.getAllServiceRecord);

router.route("/:serviceId").get(ServicesController.getServicesById);

router
  .route("/:serviceId/complete")
  .put(
    validationMiddleWare(
      ServicesValidation.updateServiceRecordStatusValidationSchema
    ),
    ServicesController.updateServiceRecordStatusToComplete
  );

export const ServiceRoute = router;
