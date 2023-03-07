import cors from "cors";
import express, { json } from "express";
import "express-async-errors";
import "reflect-metadata";
import routes from "../Routes";

class App {
  public express: express.Application;
  public constructor() {
    this.express = express();
    this.express.use(json());
    this.express.use(cors());
    this.routes();
  }

  public async start(port: number, callback: () => void) {
    return this.express.listen(port, callback);
  }
  private routes(): void {
    routes(this.express);
  }
}
export default new App();
