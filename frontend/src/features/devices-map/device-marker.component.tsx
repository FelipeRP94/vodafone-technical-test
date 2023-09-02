import { Device } from "../devices-list/device.model";

interface Props {
  device: Device;
}

export const DeviceMarkerInformation = ({ device }: Props) => (
  <div>
    <p>{device.name}</p>
    <p>{device.mobileNumber}</p>
    <p>Click for more details</p>
  </div>
);
