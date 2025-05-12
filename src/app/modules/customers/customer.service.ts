import { StatusCodes } from "http-status-codes";
import { CustomError } from "../../errors/custome.error";
import { prisma } from "../../shared/prisma";
import { ICustomer, TCustomerUpdate } from "./customer.interface";

const createCustomerIntoDB = async (payload: ICustomer) => {
  const customer = await prisma.customer.create({
    data: payload,
  });

  return customer;
};

const getAllCustomersIntoDB = async () => {
  const customers = await prisma.customer.findMany();  
  if (customers?.length == 0) {
    
    throw new CustomError(
      StatusCodes.NOT_FOUND,
      "Requested resource was not found"
    );
  }
  return customers;
};

const getCustomerByIdIntoDB = async (customerId: string) => {
  const customer = await prisma.customer.findUniqueOrThrow({
    where: {
      customerId,
    },
  });

  return customer;
};

const updateCustomerById = async (
  customerId: string,
  payload: TCustomerUpdate
) => {
  await prisma.customer.findUniqueOrThrow({
    where: {
      customerId,
    },
  });
  const updateCustomer = await prisma.customer.update({
    where: {
      customerId,
    },
    data: payload,
  });

  return updateCustomer;
};

const deleteCustomerById = async (customerId: string) => {
  await prisma.customer.findUniqueOrThrow({
    where: {
      customerId,
    },
  });
  const deletedUser = await prisma.customer.delete({
    where: {
      customerId,
    },
  });

  return deletedUser;
};

export const customerServices = {
  createCustomerIntoDB,
  getAllCustomersIntoDB,
  getCustomerByIdIntoDB,
  updateCustomerById,
  deleteCustomerById,
};
