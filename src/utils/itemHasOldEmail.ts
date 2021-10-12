import { IItem } from "~/services/getUserItems";

const itemHasOldEmail = (item: IItem) => {
  const date = new Date(item.createdAt).getTime();
  const timestamp = new Date().getTime() - 30 * 24 * 60 * 60 * 1000;

  if (isNaN(date)) return null;

  if (timestamp > date) {
    return item;
  } else {
    return null;
  }
};

export default itemHasOldEmail;
