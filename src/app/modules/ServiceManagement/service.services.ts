import { StatusCodes } from "http-status-codes";
import { CustomError } from "../../errors/custome.error";
import { prisma } from "../../shared/prisma";
import { IServicePayload } from "./service.interface";

const createServiceIntoDB = async (payload: IServicePayload) => {
  const result = await prisma.serviceRecord.create({
    data: payload,
  });
  return result;
};

const getAllServicesRecordIntoDB = async () => {
  const result = await prisma.serviceRecord.findMany();
  if (!result) {
    throw new CustomError(
      StatusCodes.NOT_FOUND,
      "Requested resource was not found"
    );
  }
  return result;
};

const getServiceRecordByIdIntoDB = async (serviceId: string) => {
  const result = await prisma.serviceRecord.findUniqueOrThrow({
    where: {
      serviceId,
    },
  });

  return result;
};

const updateServiceRecordCompleteIntoDB = async (
  serviceId: string,
  payload: {
    completionDate?: Date;
  }
) => {
  await prisma.serviceRecord.findUniqueOrThrow({
    where: {
      serviceId,
    },
  });

  const result = await prisma.serviceRecord.update({
    where: {
      serviceId,
    },
    data: {
      status: "done",
      completionDate: payload?.completionDate
        ? new Date(payload?.completionDate).toISOString()
        : new Date().toISOString(),
    },
  });

  return result;
};
const getPendingOrOVerdueServiceIntoDb = async () => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  const result = await prisma.serviceRecord.findMany({
    where: {
      status: {
        in: ["pending", "in_progress"],
      },
      serviceDate: {
        lt: sevenDaysAgo,
      },
    },
  });

  if(!result) {
    throw new CustomError(StatusCodes.NOT_FOUND, 'Requested resource was not found')
  }

  return result;
};

export const Services = {
  createServiceIntoDB,
  getAllServicesRecordIntoDB,
  getServiceRecordByIdIntoDB,
  updateServiceRecordCompleteIntoDB,
  getPendingOrOVerdueServiceIntoDb
};
