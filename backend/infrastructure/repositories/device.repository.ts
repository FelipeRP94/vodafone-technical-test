import { Device } from "../../domain/device.model";
import DeviceSchema from "../database/schema/device.schema";

export const DeviceRepository = {
  getDevices: async () => {
    try {
      return await DeviceSchema.find();
    } catch (error) {
      console.error(error);
    }
  },
  getDeviceById: async (id: string) => {
    try {
      return await DeviceSchema.findById(id);
    } catch (error) {
      console.error(error);
    }
  },
  getDeviceByMobileNumber: async (mobileNumber: string) => {
    return await DeviceSchema.findOne({
      mobileNumber,
    });
  },
  createDevice: async (device: Device) => {
    try {
      const newDevice = new DeviceSchema(device);

      return await newDevice.save();
    } catch (error) {
      console.error(error);
    }
  },
};
