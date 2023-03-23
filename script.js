import { cipherBtn, passwordInput, toggleBtn } from "./modules/variables.js";
import caesarCipher from "./modules/caesarCipher.js";
import { coverNewPassword } from "./modules/caesarCipher.js";

cipherBtn.addEventListener("click", () => {
  caesarCipher(passwordInput.value);
});

toggleBtn.addEventListener("click", coverNewPassword);
