import { isPasswordValid } from "./passwordValidation";

test("Checks if a given string is a valid password", () => {
  expect(isPasswordValid("testTEST123@")).toBe(true);
  expect(isPasswordValid("email123")).toBe(false);
  expect(isPasswordValid(null)).toBe(false);
  expect(isPasswordValid(undefined)).toBe(false);
  expect(isPasswordValid("discordemail123@gmail.com.")).toBe(false);
  expect(isPasswordValid("pass1@")).toBe(false);
  expect(isPasswordValid("email@email")).toBe(false);
  expect(isPasswordValid("123email@email")).toBe(false);
});
