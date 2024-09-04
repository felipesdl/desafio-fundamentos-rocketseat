import { updateClient } from "../../services/update-client";
import { clientShow } from "../clients/show";

export function stickersClick() {
  const stickers = document.querySelectorAll(".sticker");
  stickers.forEach((sticker) => {
    sticker.addEventListener("click", async (selected) => {
      const idCard = document.getElementById("idCard").innerText;
      const client = await updateClient({ id: idCard });
      clientShow({ client });
    });
  });
}
