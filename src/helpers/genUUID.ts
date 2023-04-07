import { customAlphabet } from "nanoid";

const LONG_ID_LENGTH = 23;
const alphanumericLowercase = "0123456789abcdefghijklmnopqrstuvwxyz";
export const genUUID = customAlphabet(alphanumericLowercase, LONG_ID_LENGTH);
