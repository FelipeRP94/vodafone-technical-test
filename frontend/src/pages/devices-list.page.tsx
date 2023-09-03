import { PageTitle } from "../components/title/page-title-component";
import { DevicesList } from "../features/devices-list/devices-list.component";
import { CreateDevice } from "../features/create-device/create-device.component";

export const DevicesListPage = () => {
  return (
    <>
      <PageTitle title="Devices list" />
      <CreateDevice />
      <DevicesList />
    </>
  );
};
