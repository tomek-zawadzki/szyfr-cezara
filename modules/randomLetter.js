import {
  resetNewPassword,
  resetTextValues,
  cipheredPassword,
} from "./reset.js";
import { newPassword } from "./variables.js";
import { alphabetSmallLetters, alphabetBigLetters } from "./caesarCipher.js";

const numbersAndSigns = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "!",
  "@",
  "#",
  "%",
  "$",
  "*",
];

const randomLetter = (password) => {
  resetNewPassword();
  const bigSmallSigns = [
    ...alphabetSmallLetters,
    ...alphabetBigLetters,
    ...numbersAndSigns,
  ];
  const splitedPassword = password.split("");
  splitedPassword.forEach((sign) => {
    const random = Math.floor(Math.random() * bigSmallSigns.length);
    sign = bigSmallSigns[random];
    cipheredPassword.push(sign);
  });

  const newPasswordValue = cipheredPassword.join("");
  newPassword.textContent = newPasswordValue;

  resetTextValues();
};

export default randomLetter;
