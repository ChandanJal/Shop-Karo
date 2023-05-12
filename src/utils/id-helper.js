import { v4 as uuidv4 } from "uuid";

export function generateRandomId() {
  return uuidv4();
}

export function generateRandomText(length = 10) {
  let result = "";

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;

  let counter = 0;

  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }

  return result;
}
