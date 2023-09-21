import React, { useState, useEffect } from "react";
import axios from "axios";

const StationList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    // API 호출을 위한 함수
    const fetchData = async () => {
      try {
        // API 엔드포인트 URL
        const apiUrl = "http://localhost:5002"; // 여기에 백엔드 서버의 URL을 넣어주세요.

        // Axios를 사용하여 데이터 가져오기
        const response = await axios.get(apiUrl);

        // 가져온 데이터 설정
        setData(response.data.data);

        // 로딩 상태 업데이트
        setLoading(false);
      } catch (error) {
        // 에러 발생 시 처리
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <h1>API Station List</h1>
      {data.map((item, index) => (
        <p key={index}>{item.lcNm}</p>
      ))}
    </div>
  );
};

export default StationList;
