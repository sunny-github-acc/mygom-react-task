import { FC, useCallback } from "react";
import { useHistory } from "react-router";
import { Routes } from "~/constants";
import { IItem } from "~/services/getUserItems";
import { isEmailValid } from "~/utils/validation/emailValidation";
import logout from "../../../../services/logout";

import "./header-style.scss";

interface IHeader {
  items: Array<IItem>;
  username: string;
}

const Header: FC<IHeader> = ({ items, username }) => {
  const { push } = useHistory();

  const handleLogout = useCallback(() => {
    logout();
    push(Routes.Login);
  }, []);

  return (
    <div className="header">
      <div className="menu"></div>
      <div className="logo">
        <h1>{`${
          items.filter((item) => !isEmailValid(item.email)).length
        } Emails are wrong`}</h1>
        <span>
          Email validator to protect your company from bad registrations
        </span>
      </div>
      <div className="user-section">
        <h3 className="username">{username}</h3>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Header;
