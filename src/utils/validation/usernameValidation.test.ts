import { isUsernameValid } from "./usernameValidation";

test("Checks if a given string is a valid username", () => {
  expect(isUsernameValid("testTEST123")).toBe(true);
  expect(isUsernameValid("testTEST123@")).toBe(false);
  expect(isUsernameValid("email123")).toBe(true);
  expect(isUsernameValid("discorddddd.")).toBe(false);
  expect(isUsernameValid("pass1@")).toBe(false);
  expect(isUsernameValid("email@email")).toBe(false);
  expect(isUsernameValid("123email@email")).toBe(false);
});
