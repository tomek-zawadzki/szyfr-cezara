import passwordInput from "./script.js";

const newPassword = document.querySelector(".new-password__value");
const passwordInfo = document.querySelector(".password__info");

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

const validation = (tekst) => {
  passwordInfo.textContent = tekst;
  passwordInfo.style.visibility = "visible";
};

const cezarCipher = (password) => {
  const splitedPassword = password.toLowerCase().split("");
  const rot13 = 13;

  if (passwordInput.value === "") {
    validation("Wpisz hasło");
  } else if (passwordInput.value.includes(" ")) {
    validation("Hasło nie może zawierać spacji");
  } else {
    const newArr = splitedPassword.map((letter) => {
      let letterIndexInAlphabet = alphabet.indexOf(letter);
      let newIndex = 0;

      const calculateNewIndex = (input) => {
        if (letterIndexInAlphabet + rot13 < alphabet.length) {
          newIndex = input + rot13;
        } else {
          const differece = input + rot13 - alphabet.length;
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

  passwordInput.value = "";
  passwordInfo.value = "";
};

export default cezarCipher;
