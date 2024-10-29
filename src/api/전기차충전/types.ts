export interface StationDTO {
  csId: number; // 충전소 ID
  csNm: string; // 충전소 명칭
  addr: string; // 충전소 주소
  lat: string; // 위도 (문자열 형태)
  longi: string; // 경도 (문자열 형태)
  cpId: number; // 충전기 ID
  cpNm: string; // 충전기 명칭
  chargeTp: string; // 충전기 타입 (1: 완속, 2: 급속)
  cpTp: string; // 충전 방식
  statUpdatetime: string; // 상태 업데이트 시간
  cpStat: string; // 충전기 상태 (예: 충전 가능, 충전 중 등)
}

export class Station {
  csId: number;
  csNm: string;
  addr: string;
  lat: number;
  longi: number;
  cpId: number;
  cpNm: string;
  chargeTp: string;
  cpTp: string;
  statUpdatetime: string;
  cpStat: string;

  constructor(data: StationDTO) {
    this.csId = data.csId;
    this.csNm = data.csNm;
    this.addr = data.addr;
    this.lat = parseFloat(data.lat);
    this.longi = parseFloat(data.longi);
    this.cpId = data.cpId;
    this.cpNm = data.cpNm;
    this.chargeTp = data.chargeTp;
    this.cpTp = data.cpTp;
    this.statUpdatetime = data.statUpdatetime;
    this.cpStat = data.cpStat;
  }

  // 충전기 상태가 "충전 가능"인지 확인하는 메서드
  isAvailable(): boolean {
    return this.cpStat === "1";
  }

  // 위치 정보를 객체 형태로 반환하는 메서드
  getLocation(): { latitude: number; longitude: number } {
    return { latitude: this.lat, longitude: this.longi };
  }
}
