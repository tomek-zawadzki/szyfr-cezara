import { cipherBtn, passwordInput } from "./modules/variables.js";
import cezarCipher from "./modules/cezarCipher.js";

cipherBtn.addEventListener("click", () => {
  cezarCipher(passwordInput.value);
});

export default passwordInput;
