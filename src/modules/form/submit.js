import dayjs from "dayjs";
import { getClient } from "../../services/get-client";
import { clientShow } from "../clients/show";
const form = document.querySelector("form");
const input = document.getElementById("inputId");

const today = dayjs(new Date()).format("YYYY-MM-DD");

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const id = input.value.trim();
    if (!id) {
      return alert("Informe um ID");
    }
    const client = await getClient({ id });
    clientShow({ client });
    input.value = "";
  } catch (error) {
    console.log(error);
  }
};
