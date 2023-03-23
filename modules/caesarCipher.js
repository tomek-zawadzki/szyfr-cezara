import validation from "./validation.js";
import { newPassword, passwordInput, toggleBtn } from "./variables.js";
import {
  resetTextValues,
  resetNewPassword,
  cipheredPassword,
} from "./reset.js";
import interval from "./interval.js";

export const alphabetSmallLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let newPasswordValue;

export const alphabetBigLetters = alphabetSmallLetters.map((letter) =>
  letter.toLocaleUpperCase()
);

const pushLetters = (alphabetType, sign) => {
  const letterIndexInAlphabet = alphabetType.indexOf(sign);
  const rotCode = 13;
  let newIndex = letterIndexInAlphabet + rotCode;

  newIndex < alphabetType.length ? newIndex : (newIndex -= alphabetType.length);

  cipheredPassword.push(alphabetType[newIndex]);
};

const caesarCipher = (password) => {
  resetNewPassword();
  const splitedPassword = password.split("");
  const checkPolishLetter = /[żźćńółęąśŻŹĆŃÓŁĘĄŚ]/.test(splitedPassword);
  if (passwordInput.value === "") {
    validation("Wpisz hasło");
  } else if (checkPolishLetter) {
    validation("Hasło nie może zawierać poliskich znaków");
  } else if (passwordInput.value.includes(" ")) {
    validation("Hasło musi być w jednym ciągu (bez spacji)");
  } else {
    interval(password);
    splitedPassword.forEach((sign) => {
      const checkLetterType = /[^a-zA-Z]/.test(sign);
      const checkSmallLetter = /[a-z]/.test(sign);
      const checkBigLetter = /[A-Z]/.test(sign);

      if (checkLetterType) {
        cipheredPassword.push(sign);
      } else if (checkSmallLetter) {
        pushLetters(alphabetSmallLetters, sign);
      } else if (checkBigLetter) {
        pushLetters(alphabetBigLetters, sign);
      } else {
        throw new Error(`Coś poszło nie tak, spróbuj ponowanie`);
      }
    });

    newPasswordValue = cipheredPassword.join("");

    setTimeout(() => {
      newPassword.textContent = "*".repeat(newPasswordValue.length);
      toggleBtn.style.visibility = "visible";
    }, 1010);

    resetTextValues();
  }
};

export const coverNewPassword = () => {
  if (newPassword.textContent === newPasswordValue) {
    newPassword.textContent = "*".repeat(newPasswordValue.length);
    toggleBtn.innerHTML = `<i class="fa-regular fa-eye"></i>`;
  } else if ((newPassword.textContent = "*******")) {
    newPassword.textContent = newPasswordValue;
    toggleBtn.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;
  }
};

export default caesarCipher;
