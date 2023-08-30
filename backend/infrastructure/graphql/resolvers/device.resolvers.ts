import { getDevices, getDeviceById } from "../../../application/getDevices";

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
