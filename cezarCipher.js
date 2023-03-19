const newPassword = document.querySelector(".new-password__value");

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

const cezarCipher = (password) => {
  const splitedPassword = password.toLowerCase().split("");

  const newArr = splitedPassword.map((letter) => {
    console.log(letter, alphabet.indexOf(letter));
    let letterIndexInAlphabet = alphabet.indexOf(letter);
    let newIndex = 0;

    const calculateNewIndex = (input) => {
      if (letterIndexInAlphabet + 13 < alphabet.length) {
        newIndex = input + 13;
      } else {
        const differece = input + 13 - alphabet.length;
        newIndex += differece;
      }
    };

    calculateNewIndex(letterIndexInAlphabet);
    const cipheredPssword = alphabet[newIndex];
    return cipheredPssword;
  });

  const newPasswordValue = newArr.join("");

  return (newPassword.textContent = newPasswordValue);
};

export default cezarCipher;
