import { passwordInfo, passwordInput, newPassword } from "./variables.js";
export let cipheredPassword = [];

export const resetTextValues = () => {
  // passwordInput.value = "";
  passwordInfo.innerHTML = "";
};

export const resetNewPassword = () => {
  newPassword.textContent = "";
  cipheredPassword = [];
};
