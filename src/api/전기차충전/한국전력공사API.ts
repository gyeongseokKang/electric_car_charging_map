class 한국전력공사API {
  url = process.env.NEXT_PUBLIC_EV_CHARGING_API;
  serviceKey = process.env.NEXT_PUBLIC_EV_CHARGING_API_KEY;
  async getEvSearchList({
    page,
    perPage,
    addr,
  }: {
    page: number;
    perPage: number;
    addr: string;
  }) {
    if (!addr) {
      return [];
    }

    const response = await fetch(
      `${this.url}/v1/getEvSearchList?page=${page}&perPage=${perPage}&cond%5Baddr%3A%3ALIKE%5D=${addr}&serviceKey=${this.serviceKey}`
    ).then((response) => response.json());

    return response.data;
  }
}

export default new 한국전력공사API();
