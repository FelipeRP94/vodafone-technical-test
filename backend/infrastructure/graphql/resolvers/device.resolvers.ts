import { getDevices, getDeviceById, createDevice } from "../../../application";
import { dateScalar } from "../scalars/date.scalar";

export const deviceResolvers = {
  Date: dateScalar,
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
