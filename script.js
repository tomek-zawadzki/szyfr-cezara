import cezarCipher from "./cezarCipher.js";

const passwordInput = document.querySelector(".password__input");
const cipherBtn = document.querySelector(".cipher-btn");

cipherBtn.addEventListener("click", () => {
  cezarCipher(passwordInput.value);
});
