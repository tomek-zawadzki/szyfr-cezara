import { cipherBtn, passwordInput } from "./modules/variables.js";
import caesarCipher from "./modules/caesarCipher.js";

cipherBtn.addEventListener("click", () => {
  caesarCipher(passwordInput.value);
});
