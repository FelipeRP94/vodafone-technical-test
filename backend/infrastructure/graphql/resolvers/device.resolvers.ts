import {
  getDevices,
  getDeviceById,
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
};
