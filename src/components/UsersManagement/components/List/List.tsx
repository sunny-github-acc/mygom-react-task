import { FC, useCallback, useState } from "react";
import { IItem } from "~/services/getUserItems";
import ItemIcon from "./components/ItemIcon";
import updateItem from "../../../../services/updateItem";
import Modal from "react-modal";

import "./list-style.scss";
import ErrorBlock from "~/components/ErrorBlock";

interface IList {
  items: Array<IItem>;
}

interface IUpdateModal {
  item: IItem;
}

const UpdateModal: FC<IUpdateModal> = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>();

  const handleSubmit = useCallback(async () => {
    try {
      await updateItem({
        ...item,
        email: newEmail,
      });
    } catch {
      setErrorMessage("Failed to updated email");
    }

    setShowModal(false);
  }, []);

  return (
    <>
      <div className="button-container">
        <button className="update button" onClick={() => setShowModal(true)}>
          Update Email
        </button>
        <ErrorBlock error={errorMessage} />
      </div>
      <Modal
        className="modal"
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Example Modal"
      >
        <h1>Update Email</h1>
        <input
          placeholder="new email"
          className="input"
          value={newEmail}
          onChange={(event) => setNewEmail(event.target.value)}
        />
        <div className="pt-12px text-center">
          <button className="button" onClick={handleSubmit}>
            Change
          </button>
          <button
            className="button ml-12px"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
};

const List: FC<IList> = ({ items }) => (
  <ul className="list">
    {items.map((item) => (
      <li className="item">
        <ItemIcon name={item.name} />
        <div className="title-container">
          <div className="title">{item.name}</div>
          <div className="description">{item.email}</div>
        </div>
        <UpdateModal item={item} />
      </li>
    ))}
  </ul>
);

export default List;
