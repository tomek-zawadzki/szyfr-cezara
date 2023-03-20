import passwordInput from "../script.js";
import validation from "./validation.js";
import { newPassword, passwordInfo } from "./variables.js";

let alphabet = [
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
  const splitedPassword = password.toLowerCase().split("");
  console.log(splitedPassword);

  if (passwordInput.value === "") {
    validation("Wpisz hasło");
  } else if (passwordInput.value.includes(" ")) {
    validation(
      "Hasło nie może zawierać znaków oraz musi być w jednym ciągu (bez spacji)"
    );
  } else {
    const newArr = splitedPassword.map((letter) => {
      const letterIndexInAlphabet = alphabet.indexOf(letter);
      const rotCode = 13;
      let newIndex = letterIndexInAlphabet + rotCode;

      newIndex < alphabet.length ? newIndex : (newIndex -= alphabet.length);

      const cipheredPassword = alphabet[newIndex];
      return cipheredPassword;
    });
    const newPasswordValue = newArr.join("");
    newPassword.textContent = newPasswordValue;
  }

  resetTextValues();
};

export default cezarCipher;
