import { IItem } from "~/services/getUserItems";

const itemHasReusedEmail = (item: IItem, itemList: Array<IItem>) => {
  const isEmailReused = itemList.filter(
    (listItem) => listItem.email === item.email,
  );

  return isEmailReused.length > 1;
};

export default itemHasReusedEmail;
