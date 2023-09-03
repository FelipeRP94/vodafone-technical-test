export interface Device {
  id: string;
  name: string;
  mobileNumber: string;
  lastConnection: Date;
  latitude: number;
  longitude: number;
}

export interface DeviceFormInput {
  name: string;
  mobileNumber: string;
  latitude: number;
  longitude: number;
}
