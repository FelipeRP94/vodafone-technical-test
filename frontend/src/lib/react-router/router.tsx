import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../pages/home.page";
import { routes } from "./constants";

export const AppRouter = () => (
  <Routes>
    <Route path={routes.HOME} element={<HomePage />} />
  </Routes>
);
