import { apiConfig } from "./api-config";

export async function getClient({ id }) {
  try {
    const resp = await fetch(`${apiConfig.baseUrl}/clients/${id}`);
    return await resp.json();
  } catch (error) {
    console.log(error);
    alert("Não foi possível achar o cliente");
  }
}
