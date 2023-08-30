import { DeviceRepository } from "../../../infrastructure/repositories/device.repository";
import { GraphQLError } from "graphql";
import { isValidObjectId } from "mongoose";

export const getDeviceById = async (id: string) => {
  if (!isValidObjectId(id)) {
    throw new GraphQLError("Invalid ID", {
      extensions: {
        code: "INVALID_ID",
      },
    });
  }

  const device = await DeviceRepository.getDeviceById(id);

  if (!device) {
    throw new GraphQLError("Device not found", {
      extensions: {
        code: "NOT_FOUND",
      },
    });
  }

  return device;
};
