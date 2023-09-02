import { PageTitle } from "../components/title/page-title-component";
import { DevicesMap } from "../features/devices-map/devices-map.component";

export const HomePage = () => {
  return (
    <>
      <PageTitle title="Home page" />
      <DevicesMap />
    </>
  );
};
