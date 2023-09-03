export interface MapMarker {
  id: string;
  position: MapPosition;
  title?: string;
  infoComponent?: JSX.Element;
  onClick?: () => void;
}

export interface MapPosition {
  lat: number;
  lng: number;
}
