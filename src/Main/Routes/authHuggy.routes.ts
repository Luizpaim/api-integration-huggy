import { Router } from "express";
import { adaptRoute } from "../Adapters/express-route-adapter";
import { makeGetTokenHuggyController } from "../Factories/2-Adapters/AuthHuggy";

const AuthHuggyRoutes = Router();

AuthHuggyRoutes.post("/auth", adaptRoute(makeGetTokenHuggyController()));

export default AuthHuggyRoutes;
