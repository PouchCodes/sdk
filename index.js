import express from "express";
import dotenv from "dotenv";

import mintRoute from "./routes/mint.js";
import transferRoute from "./routes/transfer.js";
import verifyRoute from "./routes/verify.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/mint", mintRoute);
app.use("/transfer", transferRoute);
app.use("/verify", verifyRoute);

app.listen(3000, () => {
  console.log("🚀 API running on :3000");
});
