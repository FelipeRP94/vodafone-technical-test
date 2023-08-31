import {
  getDevices,
  getDeviceById,
  createDevice,
} from "../../../application/use-cases/devices";

export const deviceResolvers = {
  Query: {
    getDevices: async () => {
      return await getDevices();
    },
    getDeviceById: async (_: any, { id }: any) => {
      return await getDeviceById(id);
    },
  },
  Mutation: {
    createDevice: async (_: any, { device }: any) => {
      return await createDevice(device);
    },
  },
};
