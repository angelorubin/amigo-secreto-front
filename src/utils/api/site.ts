import { http } from "@/utils/api/axios";

export const retrieveEvent = async (id: number) => {
  const json = await http.get(`/site/events/${id}`);
  return json.data.event ?? false;
};

export const retrievePersonByCPF = async (id_event: number, cpf: string) => {
  try {
    const options = {
      params: {
        id_event,
        cpf,
      },
    };

    const res = await http.get(`/site/events/${id_event}/search`, options);

    if (res.status !== 400) {
      return res.data;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};
