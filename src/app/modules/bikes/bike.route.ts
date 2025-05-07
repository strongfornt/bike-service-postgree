import express from "express";
import { bikeController } from "./bike.controller";
import { validationMiddleWare } from "../../middlewares/validationMiddleware";
import { bikeValidationSchema } from "./bike.validation";
const router = express.Router();

router
  .route("/")
  .post(
    validationMiddleWare(bikeValidationSchema.bikeValidationZodSchema),
    bikeController.createBike
  )
  .get(bikeController.getAllBike);


 router.route('/:bikeId')
        .get(bikeController.getBike) 

export const bikeRoutes = router;
