import { gql, useQuery } from "@apollo/client";
import { Device } from "../devices-list/device.model";

const GET_DEVICE_BY_ID = gql`
  query Query($deviceId: ID!) {
    getDeviceById(id: $deviceId) {
      _id
      name
      mobileNumber
      lastConnection
      latitude
      longitude
    }
  }
`;

export const useDevice = (deviceId: string) => {
  const { data, loading, error } = useQuery(GET_DEVICE_BY_ID, {
    variables: { deviceId },
  });

  const device: Device = data ? data.getDeviceById : null;

  return { device, loading, error };
};
