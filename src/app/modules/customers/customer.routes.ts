import express from "express";
import { customerController } from "./customer.controller";

const router = express.Router();

router.route('/')
    .post(customerController.createCustomer)


export const CustomerRoutes = router;
