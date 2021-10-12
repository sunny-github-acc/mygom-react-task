import { IItem } from "~/services/getUserItems";

const itemHasOldEmail = (item: IItem) => {
  const timestamp = new Date().getTime() - 30 * 24 * 60 * 60 * 1000;

  if (timestamp > new Date(item.createdAt).getTime()) {
    return item;
  } else {
    return null;
  }
};

export default itemHasOldEmail;
