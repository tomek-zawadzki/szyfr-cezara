import passwordInput from "../script.js";
import validation from "./validation.js";
import { newPassword, passwordInfo } from "./variables.js";

const cipheredPassword = [];

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

const alphabetBigLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const resetTextValues = () => {
  passwordInput.value = "";
  passwordInfo.value = "";
};

const pushLetter = (alphabetType, sign) => {
  const letterIndexInAlphabet = alphabetType.indexOf(sign);
  const rotCode = 13;
  let newIndex = letterIndexInAlphabet + rotCode;

  newIndex < alphabetType.length ? newIndex : (newIndex -= alphabetType.length);

  cipheredPassword.push(alphabetType[newIndex]);
};

const cezarCipher = (password) => {
  const splitedPassword = password.split("");

  if (passwordInput.value === "") {
    validation("Wpisz hasło");
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
  }

  resetTextValues();
};

export default cezarCipher;
