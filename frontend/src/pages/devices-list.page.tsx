import { PageTitle } from "../components/title/page-title-component";
import { DevicesList } from "../features/devices-list/devices-list.component";

export const DevicesListPage = () => {
  return (
    <>
      <PageTitle title="Devices list" />
      <DevicesList />
    </>
  );
};
