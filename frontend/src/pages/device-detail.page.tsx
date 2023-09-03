import { useParams } from "react-router-dom";
import { PageTitle } from "../components/title/page-title-component";
import { DeviceDetail } from "../features/device-detail/device-detail.component";

export const DeviceDetailPage = () => {
  const { id } = useParams();

  return (
    <>
      <PageTitle title="Device detail" />
      {id && <DeviceDetail id={id} />}
    </>
  );
};
