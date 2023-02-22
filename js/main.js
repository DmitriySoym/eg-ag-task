// timer=============================

// initial timer value
const deadline = new Date("May 31 2023 00:00:00");

const now = new Date();
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

// dinamic timer value
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

function genetatePopup(title, color, text) {
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
  popuptitle.style.color = color;
  popuptitle.innerText = title;
  popupBody.append(popuptitle);

  const popupText = document.createElement("p");
  popupText.classList.add("popup__text");
  popupText.innerText = text;
  popupBody.append(popupText);

  const popupBtn = document.createElement("div");
  popupBtn.classList.add("popup__btn");
  popupBtn.innerText = "Close";
  popupBody.append(popupBtn);
}

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

// form validation and sending data
const URL = "https://63f469072213ed989c41f642.mockapi.io/egorov-agency/emails";
const submitBtn = document.querySelector(".subscription__form-btn");
const input = document.querySelector(".subscription__input");

submitBtn.onclick = (event) => {
  event.preventDefault();
  sendForm();
  input.value = "";
};

function validateEmail(value) {
  const validation = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  let validEmail;

  value.match(validation) ? (validEmail = true) : (validEmail = false);

  return validEmail;
}

const sendForm = async () => {
  let isEmailValid = validateEmail(input.value);

  const success = {
    title: "SUCCESS!",
    color: "#162c4e",
    text: "You have successfully subscribed to the email newsletter",
  };
  const fail = {
    title: "FAIL!",
    color: "red",
    text: `Something went wrong. Please, try again later.`,
  };

  const wrongEmail = {
    title: "Ettention!",
    color: "red",
    text: "Please, enter a correct email.",
  };

  if (isEmailValid) {
    await fetch(URL, {
      method: "POST",
      body: JSON.stringify({ email: input.value }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then(() => {
        genetatePopup(success.title, success.color, success.text);
      })
      .catch(() => {
        genetatePopup(fail.title, fail.color, fail.text);
      });
  } else {
    setTimeout(
      () => genetatePopup(wrongEmail.title, wrongEmail.color, wrongEmail.text),
      750
    );
  }
};

//accordion==========================

const accordion = document.querySelectorAll(".events__item-info");
const accordionParent = document.querySelectorAll(".events__item");

accordion.forEach((item) =>
  item.addEventListener("click", () => {
    const parent = item.parentElement;

    if (parent.classList.contains("open")) {
      return;
    } else {
      for (const el of accordionParent) {
        el.classList.remove("open");
      }
      for (el of accordion) {
        el.classList.remove("open");
      }
      item.classList.add("open");
      parent.classList.add("open");
    }
  })
);

// animation of title after page scrolling
const scrollBtn = document.querySelector(".subscription__btn");
const animationTarget = document.querySelector(".events__title");
let animationCount = 0;

scrollBtn.addEventListener("click", () => {
  if (animationCount > 0) {
    return;
  } else {
    animationTarget.animate(
      [
        { transform: "translateY(-100%)", opacity: 0 },
        { transform: "translateY(0)", opacity: 0.39 },
      ],
      {
        duration: 1000,
        delay: 300,
      }
    );
    animationCount += 1;
  }
});
