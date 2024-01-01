import { http } from "@/utils/api/axios";

export const retrieveEvent = async (id: number) => {
  const json = await http.get(`/site/events/${id}`);
  return json.data.event ?? false;
};

export const retrieveCPF = async (id_event: number, cpf: string) => {
  const options = {
    params: {
      cpf,
    },
  };

  const res = await http.get(`/site/events/${id_event}/search`, options);
  return res.data ?? false;
};
