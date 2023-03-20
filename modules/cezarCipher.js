import passwordInput from "../script.js";
import validation from "./validation.js";
import { newPassword, passwordInfo } from "./variables.js";

const alphabet = [
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

const resetTextValues = () => {
  passwordInput.value = "";
  passwordInfo.value = "";
};

const cezarCipher = (password) => {
  const cipheredPassword = [];
  const splitedPassword = password.toLowerCase().split("");

  if (passwordInput.value === "") {
    validation("Wpisz hasło");
  } else if (passwordInput.value.includes(" ")) {
    validation("Hasło musi być w jednym ciągu (bez spacji)");
  } else {
    splitedPassword.forEach((letter) => {
      const checkLetterType = /[^a-zA-Z]/.test(letter);
      if (checkLetterType) {
        cipheredPassword.push(letter);
      } else {
        const letterIndexInAlphabet = alphabet.indexOf(letter);
        const rotCode = 13;
        let newIndex = letterIndexInAlphabet + rotCode;

        newIndex < alphabet.length ? newIndex : (newIndex -= alphabet.length);

        cipheredPassword.push(alphabet[newIndex]);
      }
    });
    const newPasswordValue = cipheredPassword.join("");
    newPassword.textContent = newPasswordValue;
  }

  resetTextValues();
};

export default cezarCipher;
