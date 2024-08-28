"use client";

import 한국전력공사API from "@/api/전기차충전/한국전력공사API";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense, useState } from "react";
export default function StationPage() {
  const [address, setAddress] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-4">
      <div>
        <Input
          type="text"
          value={address}
          onChange={handleInputChange}
          placeholder="주소를 입력하세요"
        />
      </div>
      <div>
        <Suspense fallback={<div>로딩중...</div>}>
          <충전소리스트컴포넌트 address={address} />
        </Suspense>
      </div>
    </main>
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
    <Table className="max-w-screen-md">
      <TableHeader>
        <TableRow>
          <TableHead>번호</TableHead>
          <TableHead>주소</TableHead>
          <TableHead>장소명</TableHead>
          <TableHead>충전기</TableHead>
          <TableHead>업데이트</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((station: any, index: number) => {
          console.log(station);
          return (
            <TableRow key={station.cpId}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{station.addr}</TableCell>
              <TableCell>{station.csNm}</TableCell>
              <TableCell>{station.cpNm}</TableCell>
              <TableCell>{station.statUpdatetime}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
