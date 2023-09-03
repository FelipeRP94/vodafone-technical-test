import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/loading/loading.component";
import { useDevices } from "./useDevices";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { routes } from "../../lib/react-router/constants";

export const DevicesList = () => {
  const { devices, loading, error } = useDevices();
  const navigate = useNavigate();

  if (loading) return <Loading />;

  if (error)
    return (
      <p>There is an error getting the devices. Please, try again later.</p>
    );

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1, minWidth: 150 },
    {
      field: "mobileNumber",
      headerName: "Mobile number",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "lastConnection",
      headerName: "Last connection",
      type: "string",
      flex: 1,
      minWidth: 200,
      valueGetter: (params: GridValueGetterParams) =>
        new Date(params.row.lastConnection).toLocaleString("es-ES", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
    },
    {
      field: "latitude",
      headerName: "Latitude",
      type: "number",
      flex: 0.5,
      minWidth: 100,
    },
    {
      field: "longitude",
      headerName: "Longitude",
      type: "number",
      flex: 0.5,
      minWidth: 100,
    },
  ];

  return (
    <DataGrid
      rows={devices}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10, 20, 50]}
      onCellClick={(params) =>
        navigate(routes.DEVICE_DETAIL.replace(":id", params.id.toString()))
      }
    />
  );
};
