import express from "express";
import api from "./api";

const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3001", // 허용할 origin 주소
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // 인증 정보를 포함한 요청 허용
};

const app = express(); // Express 애플리케이션을 만들고

app.use(cors(corsOptions)); // CORS 미들웨어를 설정

const PORT = 5002;

app.use("/", api);
app.listen(PORT, () => console.log(`${PORT} 포트에서 서버 작동!!`));
