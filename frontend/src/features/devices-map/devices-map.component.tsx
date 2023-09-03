import { MapMarker } from "../../model/map.model";
import { useDevices } from "../devices-list/useDevices";
import { Map } from "../../components/map/map.component";
import { Loading } from "../../components/loading/loading.component";
import { useNavigate } from "react-router-dom";
import { routes } from "../../lib/react-router/constants";
import { DeviceMarkerInformation } from "./device-marker.component";

export const DevicesMap = () => {
  const { devices, loading, error } = useDevices();

  const navigate = useNavigate();

  if (loading) return <Loading />;

  if (error)
    return (
      <p>There is an error getting the devices. Please, try again later.</p>
    );

  const mapMarkers: MapMarker[] = devices?.map((device) => ({
    id: device._id,
    position: {
      lat: device.latitude,
      lng: device.longitude,
    },
    title: device.name,
    infoComponent: <DeviceMarkerInformation device={device} />,
    onClick: () =>
      navigate(`${routes.DEVICE_DETAIL.replace(":id", device._id)}`),
  }));

  return <Map markers={mapMarkers} />;
};
