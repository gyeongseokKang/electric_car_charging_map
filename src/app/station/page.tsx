"use client";

import 한국전력공사API from "@/api/전기차충전/한국전력공사API";
import { useState } from "react";

export default function StationPage() {
  const [data, setData] = useState<any>([]);
  const [address, setAddress] = useState<string>("");

  const fetchData = async () => {
    const result = await 한국전력공사API.getEvSearchList({
      page: 1,
      perPage: 10,
      addr: address,
    });
    setData(result);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleButtonClick = () => {
    fetchData();
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={address}
          onChange={handleInputChange}
          placeholder="주소를 입력하세요"
        />
        <button onClick={handleButtonClick}>검색</button>
      </div>
      <div>
        {data?.data?.map((station: any, index: number) => {
          return (
            <div key={station.addr}>
              <p>
                {index + 1} {station.addr}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
