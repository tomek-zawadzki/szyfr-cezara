import {
  cipherBtn,
  copyBtn,
  passwordInput,
  toggleBtn,
} from "./modules/variables.js";
import caesarCipher, {
  copyPassword,
  coverNewPassword,
} from "./modules/caesarCipher.js";

cipherBtn.addEventListener("click", () => {
  caesarCipher(passwordInput.value);
});
toggleBtn.addEventListener("click", coverNewPassword);
copyBtn.addEventListener("click", copyPassword);
