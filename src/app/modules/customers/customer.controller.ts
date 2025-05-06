import catchAsync from "../../utils/catch-async";
import { customerServices } from "./customer.service";

const createCustomer = catchAsync(async (req, res, next) => {


    const result = await customerServices.createUserIntoDB(req?.body)
})


export const customerController = {
    createCustomer
}