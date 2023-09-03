// @ts-nocheck
import { render, screen } from "@testing-library/react";
import { DeviceMarkerInformation } from "../../../src/features/devices-map/device-marker.component";
import { Device } from "../../../src/features/devices-list/device.model";

describe("DeviceMarker", () => {
  const mockDevice: Device = {
    id: "123",
    name: "test device",
    mobileNumber: "1234567890",
    latitude: 3.33,
    longitude: 4.44,
    lastConnection: new Date(),
  };

  test("Should render device name", () => {
    render(<DeviceMarkerInformation device={mockDevice} />);

    const deviceName = screen.getByText(mockDevice.name);

    expect(deviceName).toBeInTheDocument();
  });

  test("Should render device mobile number", () => {
    render(<DeviceMarkerInformation device={mockDevice} />);

    const deviceName = screen.getByText(mockDevice.mobileNumber);

    expect(deviceName).toBeInTheDocument();
  });
});
