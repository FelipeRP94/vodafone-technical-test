import { gql, useQuery } from "@apollo/client";
import { Device } from "./device.model";

const GET_DEVICES = gql`
  query GetDevices {
    getDevices {
      id
      name
      mobileNumber
      lastConnection
      latitude
      longitude
    }
  }
`;

export const useDevices = () => {
  const { data, loading, error } = useQuery(GET_DEVICES);

  const devices: Device[] = data ? data.getDevices : [];

  return { devices, loading, error };
};
