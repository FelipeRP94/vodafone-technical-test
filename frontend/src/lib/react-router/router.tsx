import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../pages/home.page";
import { routes } from "./constants";
import { DeviceDetailPage } from "../../pages/device-detail.page";

export const AppRouter = () => (
  <Routes>
    <Route path={routes.HOME} element={<HomePage />} />
    <Route path={routes.DEVICE_DETAIL} element={<DeviceDetailPage />} />
  </Routes>
);
