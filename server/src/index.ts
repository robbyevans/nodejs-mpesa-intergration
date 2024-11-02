import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/lipaRoute";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your client's origin
    credentials: true,
  })
);

app.use("/lipa", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Daraja API payment gateway");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
