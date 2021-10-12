import itemHasReusedEmail from "./itemHasReusedEmail";

enum Roles {
  write = "write",
}

const item = {
  name: "name",
  role: Roles.write,
  email: "name@email.com",
  createdAt: new Date(
    "Tue Oct 1 2021 16:38:35 GMT+0300 (Eastern European Summer Time)",
  ),
};

const item2 = {
  name: "name",
  role: Roles.write,
  email: "name@email.com",
  createdAt: new Date(
    "Tue Sep 12 2021 16:38:35 GMT+0300 (Eastern European Summer Time)",
  ),
};

const item3 = {
  name: "name",
  role: Roles.write,
  email: "username@email.com",
  createdAt: new Date("16:38:35"),
};

test("Checks if passed item's email value duplicates in other items of passed item list", () => {
  expect(itemHasReusedEmail(item, [item, item2, item3])).toBe(true);
  expect(itemHasReusedEmail(item2, [item2, item3])).toBe(false);
  expect(itemHasReusedEmail(item3, [item, item3])).toBe(false);
});
