import { FC } from "react";
import { Routes } from "~/constants";
import { IItem } from "~/services/getUserItems";
import itemHasOldPassword from "~/utils/itemHasOldPassword";
import itemHasReusedPassword from "~/utils/itemHasReusedPassword";
import itemHasWeakPassword from "~/utils/itemHasWeakPassword";
import FilterTab from "./components/FilterTab";

import "./filter-style.scss";

interface IFilter {
  items: Array<IItem>;
}

const Filter: FC<IFilter> = ({ items }) => {
  const weakItemsCount = items.filter((item) =>
    itemHasWeakPassword(item),
  ).length;

  const reusedItemsCount = items.filter((item) =>
    itemHasReusedPassword(item, items),
  ).length;

  const oldItemsCount = () =>
    items.filter((item) => item === itemHasOldPassword(item)).length;

  return (
    <div className="filter">
      <FilterTab title="all" count={items.length} path={Routes.Users} />
      <FilterTab title="Wrong" count={weakItemsCount} path={Routes.Weak} />
      <FilterTab title="Reused" count={reusedItemsCount} path={Routes.Reused} />
      <FilterTab title="Old" count={oldItemsCount()} path={Routes.Old} />
    </div>
  );
};

export default Filter;
