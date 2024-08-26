"use client";

import 한국전력공사API from "@/api/전기차충전/한국전력공사API";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense, useState } from "react";

export default function StationPage() {
  const [address, setAddress] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
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
      </div>
      <Suspense fallback={<div>로딩중...</div>}>
        <충전소리스트컴포넌트 address={address} />
      </Suspense>
    </div>
  );
}

const 충전소리스트컴포넌트 = ({ address }: { address: string }) => {
  const { data } = useSuspenseQuery({
    queryKey: ["getEvSearchList", address],
    queryFn: () =>
      한국전력공사API.getEvSearchList({
        page: 1,
        perPage: 10,
        addr: address,
      }),
    staleTime: 60 * 1000,
    gcTime: 60 * 1000 * 2,
  });

  return (
    <div>
      {data?.map((station: any, index: number) => {
        return (
          <div key={station.addr}>
            <p>
              {index + 1} {station.addr}
            </p>
          </div>
        );
      })}
    </div>
  );
};
