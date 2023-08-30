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
};
