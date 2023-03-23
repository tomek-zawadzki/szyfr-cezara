import {
  passwordInfo,
  passwordInput,
  newPassword,
  toggleBtn,
} from "./variables.js";
export let cipheredPassword = [];

export const resetTextValues = () => {
  passwordInfo.innerHTML = "";
};

export const resetNewPassword = () => {
  toggleBtn.innerHTML = `<i class="fa-regular fa-eye"></i>`;
  newPassword.textContent = "";
  cipheredPassword = [];
};
