import { Device } from "../../../domain/device.model";
import { DeviceRepository } from "../../../infrastructure/repositories/device.repository";
import { GraphQLError } from "graphql";

const deviceFieldsValidation = (device: Device) => {
  if (!device.name) {
    throw new GraphQLError("The device name is mandatory", {
      extensions: {
        code: "ERROR_CREATING_DEVICE",
      },
    });
  }

  if (!device.lastConnection) {
    throw new GraphQLError("The device last connection is mandatory", {
      extensions: {
        code: "ERROR_CREATING_DEVICE",
      },
    });
  }

  if (!device.mobileNumber) {
    throw new GraphQLError("The device mobile number is mandatory", {
      extensions: {
        code: "ERROR_CREATING_DEVICE",
      },
    });
  }

  if (!device.latitude) {
    throw new GraphQLError("The device latitude is mandatory", {
      extensions: {
        code: "ERROR_CREATING_DEVICE",
      },
    });
  }

  if (!device.longitude) {
    throw new GraphQLError("The device longitude is mandatory", {
      extensions: {
        code: "ERROR_CREATING_DEVICE",
      },
    });
  }

  return true;
};

export const createDevice = async (device: Device) => {
  let deviceCreated = null;

  if (deviceFieldsValidation(device)) {
    deviceCreated = DeviceRepository.createDevice(device);
  }

  if (!deviceCreated) {
    throw new GraphQLError("Error creating device", {
      extensions: {
        code: "ERROR_CREATING_DEVICE",
      },
    });
  }

  return deviceCreated;
};
