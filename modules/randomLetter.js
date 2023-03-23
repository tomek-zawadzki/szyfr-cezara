import {
  resetNewPassword,
  resetTextValues,
  cipheredPassword,
} from "./reset.js";
import { newPassword } from "./variables.js";
import { alphabetSmallLetters, alphabetBigLetters } from "./caesarCipher.js";

const randomLetter = (password) => {
  resetNewPassword();
  const bigAndSmallLetters = [...alphabetSmallLetters, ...alphabetBigLetters];
  const splitedPassword = password.split("");
  splitedPassword.forEach((sign) => {
    const random = Math.floor(Math.random() * bigAndSmallLetters.length);
    sign = bigAndSmallLetters[random];
    cipheredPassword.push(sign);
  });

  const newPasswordValue = cipheredPassword.join("");
  newPassword.textContent = newPasswordValue;

  resetTextValues();
};

export default randomLetter;
