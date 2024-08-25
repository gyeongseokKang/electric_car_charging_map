export default async function StationPage() {
  const data: any = await fetch(
    "https://api.odcloud.kr/api/EvInfoServiceV2/v1/getEvSearchList?page=1&perPage=2&cond%5Baddr%3A%3ALIKE%5D=강남구&serviceKey=서비스키",
    {
      method: "GET",
      headers: {
        Accept: "*/*",
      },
    }
  )
    .then((response) => response.json())
    .catch((error) => console.error("Error:", error));

  return (
    <div>
      {data.data.map((station: any) => {
        return (
          <div key={station.addr}>
            <p>{station.addr}</p>
          </div>
        );
      })}
    </div>
  );
}
