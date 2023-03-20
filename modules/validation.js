import { passwordInfo } from "./variables.js";

const validation = (text) => {
  passwordInfo.textContent = text;
  passwordInfo.style.visibility = "visible";
};

export default validation;
