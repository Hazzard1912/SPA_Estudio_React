import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />

        {/* Todas las rutas del HeroesRoutes compartiran algo
        del html, en este ejemplo el navbar. */}
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
