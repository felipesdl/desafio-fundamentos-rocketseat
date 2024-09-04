import dayjs from "dayjs";

const history = document.querySelector(".historyContainer ul");
const cortes = document.querySelectorAll(".cortes");
const stickers = document.querySelectorAll(".sticker");
const gift = document.querySelector(".gift");
const name = document.getElementById("name");
const since = document.getElementById("since");
const left = document.getElementById("left");
const idCard = document.getElementById("idCard");
const progress = document.getElementById("progress");

export function clientShow({ client }) {
  try {
    idCard.innerText = client.id;
    left.innerText = client.loyaltyCard.cutsRemaining;
    name.innerText = client.name;
    since.innerText = client.clientSince;
    cortes.forEach((corte) => (corte.innerText = client.loyaltyCard.totalCuts));
    console.log(client.loyaltyCard.totalCuts);
    progress.setAttribute("value", client.loyaltyCard.totalCuts * 10);
    stickers.forEach((sticker, i) => {
      sticker.innerHTML = "";
      if (i < client.loyaltyCard.totalCuts && i < 9) {
        const img = document.createElement("img");
        img.setAttribute("src", "./src/assets/PinCheck.png");
        img.setAttribute("alt", "check");
        sticker.appendChild(img);
      }
      if (client.loyaltyCard.totalCuts === 10) {
        const img = document.createElement("img");
        img.setAttribute("src", "./src/assets/gift-complete.png");
        img.setAttribute("alt", "gift");
        gift.appendChild(img);
      } else {
        const img = document.createElement("img");
        img.setAttribute("src", "./src/assets/gift.svg");
        img.setAttribute("alt", "gift");
        img.classList.add("smaller");
        gift.appendChild(img);
      }
    });
    history.innerHTML = "";
    client.appointmentHistory.forEach((appoint) => {
      const item = document.createElement("li");
      const date = document.createElement("span");
      const time = document.createElement("p");
      date.innerText = appoint.date;
      time.innerText = appoint.time;

      const img = document.createElement("img");
      img.setAttribute("src", "./src/assets/check.svg");
      img.setAttribute("alt", "check");

      item.append(date, time, img);
      history.appendChild(item);
    });
  } catch (error) {
    console.log(error);
    alert("Não foi possível mostrar o cliente");
  } finally {
    if (client.loyaltyCard.cutsRemaining === 0) {
      alert("Parabéns seu próximo corte é gratis!!");
    }
  }
}
