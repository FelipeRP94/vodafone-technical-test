import DeviceSchema from "../database/schema/device.schema";

export const DeviceRepository = {
  getDevices: async () => {
    try {
      return await DeviceSchema.find();
    } catch (error) {
      console.error(error);
    }
  },
};
