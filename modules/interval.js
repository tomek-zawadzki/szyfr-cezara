import randomLetter from "./randomLetter.js";

const interval = (password) => {
  let i = 0;
  const intervalPassword = setInterval(() => {
    i++;
    randomLetter(password);
    if (i >= 10) {
      clearInterval(intervalPassword);
    }
  }, 100);
};

export default interval;
