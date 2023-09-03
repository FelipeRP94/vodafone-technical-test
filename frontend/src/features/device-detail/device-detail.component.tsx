import Stack from "@mui/material/Stack";
import { Loading } from "../../components/loading/loading.component";
import { useDevice } from "./useDevice";
import { MapMarker } from "../../model/map.model";
import { Map } from "../../components/map/map.component";
import { InfoContainer } from "./device-detail.styles";

interface Props {
  id: string;
}

export const DeviceDetail = ({ id }: Props) => {
  const { device, loading, error } = useDevice(id);

  if (loading) return <Loading />;

  if (error) return <p>There is an error loading the device information.</p>;

  const mapMarkers: MapMarker[] = [
    {
      id: device._id,
      position: {
        lat: device.latitude,
        lng: device.longitude,
      },
      title: device.name,
    },
  ];

  return (
    <Stack direction="row" flexWrap="wrap">
      <InfoContainer>
        <p>
          <b>Device name:</b> {device.name}
        </p>
        <p>
          <b>Number:</b> {device.mobileNumber}
        </p>
        <p>
          <b>Last connection: </b>
          {new Date(device.lastConnection).toLocaleString("es-ES", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </p>
        <p>
          <b>Latitude:</b> {device.latitude}
        </p>
        <p>
          <b>Longitude:</b> {device.longitude}
        </p>
      </InfoContainer>
      <InfoContainer>
        <Map markers={mapMarkers} center={mapMarkers[0].position} zoom={19} />
      </InfoContainer>
    </Stack>
  );
};
