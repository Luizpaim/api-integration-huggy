import { Router, Application } from "express";
import AuthHuggyRoutes from "./authHuggy.routes";

const routes = (app: Application): void => {
  const Routes = Router();
  app.use(Routes);
  Routes.use("/huggy", AuthHuggyRoutes);
};

export default routes;
