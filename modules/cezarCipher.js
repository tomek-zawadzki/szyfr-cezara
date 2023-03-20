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

const resetTekstValues = () => {
  passwordInput.value = "";
  passwordInfo.value = "";
};

const cezarCipher = (password) => {
  const splitedPassword = password.toLowerCase().split("");
  const rotCode = 13;

  if (passwordInput.value === "") {
    validation("Wpisz hasło");
  } else if (passwordInput.value.includes(" ")) {
    validation(
      "Hasło nie może zawierać znaków oraz musi być w jednym ciągu (bez spacji)"
    );
  } else {
    const newArr = splitedPassword.map((letter) => {
      let letterIndexInAlphabet = alphabet.indexOf(letter);
      let newIndex = 0;

      const calculateNewIndex = (input) => {
        if (letterIndexInAlphabet + rotCode < alphabet.length) {
          newIndex = input + rotCode;
        } else {
          const differece = input + rotCode - alphabet.length;
          newIndex += differece;
        }
      };

      calculateNewIndex(letterIndexInAlphabet);
      const cipheredPssword = alphabet[newIndex];
      return cipheredPssword;
    });
    const newPasswordValue = newArr.join("");
    newPassword.textContent = newPasswordValue;
  }

  resetTekstValues();
};

export default cezarCipher;
