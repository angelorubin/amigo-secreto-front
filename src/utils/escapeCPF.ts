export const escapeCPF = (cpf: string) => {
  return cpf.replace(/[^\d]/g, "").slice(0, 11);
};
