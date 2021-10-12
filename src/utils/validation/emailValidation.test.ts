import { isEmailValid } from "./emailValidation";

test("Checks if a given string is a valid email", () => {
  expect(isEmailValid("test@test.com")).toBe(true);
  expect(isEmailValid(null)).toBe(false);
  expect(isEmailValid(undefined)).toBe(false);
  expect(isEmailValid("email123")).toBe(false);
  expect(isEmailValid("discordemail123@gmail.com.")).toBe(false);
  expect(isEmailValid("pass1")).toBe(false);
  expect(isEmailValid("email@email")).toBe(false);
});
