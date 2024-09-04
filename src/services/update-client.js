import dayjs from "dayjs";
import { apiConfig } from "./api-config";
import { getClient } from "./get-client";

export async function updateClient({ id }) {
  try {
    const client = await getClient({ id });
    const today = dayjs(new Date()).format("YYYY-MM-DD");
    const hour = dayjs(new Date()).format("HH:mm");
    let body = { ...client };
    body.appointmentHistory.unshift({
      date: today,
      time: hour,
    });
    body.loyaltyCard = {
      totalCuts: client.loyaltyCard.totalCuts + 1,
      cutsNeeded: 10,
      cutsRemaining: client.loyaltyCard.cutsRemaining - 1,
    };

    const resp = await fetch(`${apiConfig.baseUrl}/clients/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application-json" },
    });
    return await resp.json();
  } catch (error) {
    console.log(error);
    alert("Não foi possível achar o cliente");
  }
}
