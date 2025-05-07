import express from "express";
import { customerController } from "./customer.controller";
import { validationMiddleWare } from "../../middlewares/validationMiddleware";
import { customerZodValidation } from "./customer.validations";

const router = express.Router();

router
  .route("/")
  .post(
    validationMiddleWare(customerZodValidation.customerZodValidationSchema),
    customerController.createCustomer
  )
  .get(customerController.getAllCustomers);

router
  .route("/:customerId")
  .get(customerController.getCustomerById)
  .put(
    validationMiddleWare(
      customerZodValidation.updateCustomerZodValidationSchema
    ),
    customerController.updateCustomerById
  )
  .delete(customerController.deleteCustomerById);



export const CustomerRoutes = router;
