import express from "express";
import routes from "./routes/index";

import { images } from "./routes/api/images";

const port = 5000;

let app = express();

app.use("/api", routes);
app.use("/images", images);
app.listen(port, () => console.log(`Listen on port ${port}`));

export default app;
