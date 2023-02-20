// timer=============================

const deadline = new Date("May 31 2023 00:00:00").getTime();

const timeValue = setInterval(function () {
  const now = new Date().getTime();
  const timeRemainder = deadline - now;

  const days = Math.floor(timeRemainder / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemainder % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemainder % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemainder % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);

//popup================================

function genetatePopup() {
  document.body.classList.add("stop-scrolling");
  const popup = document.createElement("div");
  document.body.append(popup);
  popup.classList.add("popup");

  const popupBody = document.createElement("div");
  popupBody.classList.add("popup__body");
  popup.append(popupBody);

  const closeIcon = document.createElement("img");
  closeIcon.classList.add("popup__close");
  closeIcon.src = "./assets/popup/close-icon.svg";
  popupBody.append(closeIcon);

  const popuptitle = document.createElement("h2");
  popuptitle.classList.add("popup__title");
  popuptitle.innerText = "SUCCESS!";
  popupBody.append(popuptitle);

  const popupText = document.createElement("p");
  popupText.classList.add("popup__text");
  popupText.innerText =
    "You have successfully subscribed to the email newsletter";
  popupBody.append(popupText);

  const popupBtn = document.createElement("div");
  popupBtn.classList.add("popup__btn");
  popupBtn.innerText = "Close";
  popupBody.append(popupBtn);
}

const test = document.querySelector(".development__title");

test.addEventListener("click", genetatePopup);

document.body.onclick = (event) => {
  if (
    event.target.closest(".popup__close") ||
    event.target.closest(".popup__btn")
  ) {
    const last = document.body.lastChild;
    document.body.removeChild(last);
    document.body.classList.remove("stop-scrolling");
  }
};

// const emailValidation = () => {
//   return {
//     required: "*email is required",
//     pattern: {
//       value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
//       message: "Enter a valid email",
//     },
//     maxLength: {
//       value: 30,
//       message: "*max 30 characters",
//     },
//   };
// };
