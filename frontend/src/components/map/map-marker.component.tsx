import { InfoWindow, Marker } from "@react-google-maps/api";
import { MapMarker } from "../../model/map.model";

interface Props {
  marker: MapMarker;
  isSelected: boolean;
  clusterer?: any;
  setSelectedMarker: (marker: MapMarker | null) => void;
}

export const MapMarkerComponent = ({
  marker,
  isSelected,
  setSelectedMarker,
  clusterer,
}: Props) => (
  <Marker
    key={marker.id}
    position={marker.position}
    label={marker.title}
    onClick={marker.onClick}
    onMouseOver={(_) => setSelectedMarker(marker)}
    onMouseOut={(_) => setSelectedMarker(null)}
    clusterer={clusterer}
    icon={{
      url: require("../../assets/img/marker-icon.png"),
      scaledSize: new google.maps.Size(40, 40),
      size: new google.maps.Size(40, 100),
      origin: new google.maps.Point(0, 0),
    }}
  >
    {isSelected && marker.infoComponent && (
      <InfoWindow
        position={marker.position}
        onCloseClick={() => setSelectedMarker(null)}
      >
        {marker.infoComponent}
      </InfoWindow>
    )}
  </Marker>
);
