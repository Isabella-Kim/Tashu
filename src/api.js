import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const serviceKey =
      "hrRUYGzLM2fux5XjMZ95%2BfFfcdhJWsU815LgvH%2Bql2zbzkZ2AlwBdpp9%2BI5oz6ajIUUogYOEFJpoaS%2FtZGN94g%3D%3D";
    const apiUrl = `https://apis.data.go.kr/6300000/openapi2022/tasuInfo/gettasuInfo?serviceKey=${serviceKey}&pageNo=1&numOfRows=202`;

    // const serviceKey = "45fs264dg5i5ggg8";
    // const apiUrl = `https://bikeapp.tashu.or.kr:50041/v1/openapi/station?serviceKey=${serviceKey}&pageNo=1&numOfRows=202`;

    const response = await axios.get(apiUrl);

    // API 응답을 클라이언트로 전송
    res.status(200).json({
      data: response.data.response.body.items, // 데이터를 'data' 속성으로 감싸줍니다.
      message: "hello get api nodejs-api",
    });
  } catch (error) {
    console.error("Error:", error);

    // 에러 메시지를 클라이언트에게 전달
    res.status(500).json({ error: error.message }); // error.message를 추가하여 더 자세한 오류 메시지를 반환
  }
});

export default router;
