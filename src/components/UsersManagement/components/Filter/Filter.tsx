import { FC } from "react";
import { Routes } from "~/constants";
import { IItem } from "~/services/getUserItems";
import itemHasOldEmail from "~/utils/itemHasOldEmail";
import itemHasReusedEmail from "~/utils/itemHasReusedEmail";
import { isEmailValid } from "~/utils/validation/emailValidation";
import FilterTab from "./components/FilterTab";
import "./filter-style.scss";

interface IFilter {
  items: Array<IItem>;
}

const Filter: FC<IFilter> = ({ items }) => {
  const wrongEmailItemsCount = items.filter(
    (item) => !isEmailValid(item.email),
  ).length;

  const reusedEmailItemsCount = items.filter((item) =>
    itemHasReusedEmail(item, items),
  ).length;

  const oldEmailItemsCount = items.filter(
    (item) => item === itemHasOldEmail(item),
  ).length;

  return (
    <div className="filter">
      <FilterTab title="all" count={items.length} path={Routes.Users} />
      <FilterTab
        title="Wrong"
        count={wrongEmailItemsCount}
        path={Routes.Wrong}
      />
      <FilterTab
        title="Reused"
        count={reusedEmailItemsCount}
        path={Routes.Reused}
      />
      <FilterTab title="Old" count={oldEmailItemsCount} path={Routes.Old} />
    </div>
  );
};

export default Filter;
