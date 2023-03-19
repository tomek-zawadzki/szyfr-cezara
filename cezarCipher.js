const cezarCipher = (password) => {
  const splitedPassword = password.split("");

  const newArr = splitedPassword.map((letter) => {
    console.log(letter, alphabett.indexOf(letter));
    let letterIndexInAlphabet = alphabett.indexOf(letter);
    let newIndex = 0;

    const calculateNewIndex = (input) => {
      if (letterIndexInAlphabet + 13 < alphabett.length) {
        newIndex = input + 13;
      } else {
        const differece = input + 13 - alphabett.length;
        newIndex += differece;
      }
    };

    calculateNewIndex(letterIndexInAlphabet);
    const cipheredPssword = alphabett[newIndex];
    return cipheredPssword;
  });

  return newArr;
};

export default cezarCipher;
