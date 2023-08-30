import { DeviceRepository } from "../../../infrastructure/repositories/device.repository";

export const getDevices = async () => {
  return await DeviceRepository.getDevices();
};
