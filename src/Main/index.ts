import "dotenv/config";
import App from "@/Main/Config/app";
//
const port = (process.env.PORT as unknown as number) || 5000;

App.start(port, () => {
  console.log(`Listen in port: ${port}`);
});
