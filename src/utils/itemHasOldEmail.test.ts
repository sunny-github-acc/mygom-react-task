import itemHasOldEmail from "./itemHasOldEmail";

enum Roles {
  write = "write",
}

const item = {
  name: "name",
  role: Roles.write,
  email: "name@email.com",
  createdAt: new Date(
    "Tue Sep 12 2021 16:38:35 GMT+0300 (Eastern European Summer Time)",
  ),
};

const item2 = {
  name: "name",
  role: Roles.write,
  email: "name@email.com",
  createdAt: new Date(
    "Tue Oct 1 2021 16:38:35 GMT+0300 (Eastern European Summer Time)",
  ),
};

const item3 = {
  name: "name",
  role: Roles.write,
  email: "name@email.com",
  createdAt: new Date("16:38:35"),
};

test("Returns the object that was passed in if object's createdAt value is not older than one month", () => {
  expect(itemHasOldEmail(item)).toBe(item);
  expect(itemHasOldEmail(item2)).toBe(null);
  expect(itemHasOldEmail(item3)).toBe(null);
});
