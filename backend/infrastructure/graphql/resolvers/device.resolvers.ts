import { getDevices } from "../../../application/getDevices";

export const deviceResolvers = {
  Query: {
    getDevices: async () => {
      return await getDevices();
    },
  },
};
