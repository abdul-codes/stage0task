import express, { Request, Response } from "express";
import "dotenv/config";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.get("/", async(req: Request, res: Response) => {
  const response = {
    email: "abdulsalamakinsanya2@gmail.com",
    github_url: "https://github.com/your-github",
    datetime: new Date().toISOString(),
  };

  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
