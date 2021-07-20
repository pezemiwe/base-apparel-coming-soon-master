const parent = document.querySelector(".input");
const email = document.querySelector(".box");
const button = document.querySelector(".arrow");

const outputError = () => {
  parent.classList.add("error");
};

const outputSuccess = () => {
  parent.classList.remove("error");
//   email.value = "";
};

const validateEmail = (email) => {
  let regEx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regEx.test(email.toLowerCase());
};

const emailCheck = () => {
  const emailValue = email.value.trim();
  if (emailValue === "" || !validateEmail(emailValue)) {
    outputError();
  } else {
    outputSuccess();
  }
};

button.addEventListener("click", () => {
  emailCheck();
});
