import { StatusCodes } from "http-status-codes";
import { CustomError } from "../../errors/custome.error";
import { prisma } from "../../shared/prisma";
import { IBike } from "./bike.interface";

const createBikeIntoDB = async (payload: IBike) => {
  const bike = await prisma.bike.create({
    data: payload,
  });

  return bike;
};

const getAllBikeIntoDB = async () => {
  const bikes = await prisma.bike.findMany();
  if (bikes?.length == 0) {
    throw new CustomError(
      StatusCodes.NOT_FOUND,
      "Requested resource was not found"
    );
  }

  return bikes;
};
const getBikeIntoDB = async (bikeId: string) => {
  const bike = await prisma.bike.findUniqueOrThrow({
    where: {
      bikeId,
    },
  });

  return bike;
};

export const bikeServices = {
  createBikeIntoDB,
  getAllBikeIntoDB,
  getBikeIntoDB,
};
