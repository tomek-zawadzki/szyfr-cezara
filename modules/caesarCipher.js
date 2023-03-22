import validation from "./validation.js";
import { newPassword, passwordInput } from "./variables.js";
import {
  resetTextValues,
  resetNewPassword,
  cipheredPassword,
} from "./reset.js";

const alphabetSmallLetters = [
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

const alphabetBigLetters = alphabetSmallLetters.map((letter) =>
  letter.toLocaleUpperCase()
);

const pushLetter = (alphabetType, sign) => {
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
    splitedPassword.forEach((sign) => {
      const checkLetterType = /[^a-zA-Z]/.test(sign);
      const checkSmallLetter = /[a-z]/.test(sign);
      const checkBigLetter = /[A-Z]/.test(sign);

      if (checkLetterType) {
        cipheredPassword.push(sign);
      } else if (checkSmallLetter) {
        pushLetter(alphabetSmallLetters, sign);
      } else if (checkBigLetter) {
        pushLetter(alphabetBigLetters, sign);
      } else {
        throw new Error(`Coś poszło nie tak, spróbuj ponowanie`);
      }
    });

    const newPasswordValue = cipheredPassword.join("");
    newPassword.textContent = newPasswordValue;

    resetTextValues();
  }
};

export default caesarCipher;