import { useSelector } from "react-redux";
import { contactsSelectors } from "../redux/contactsSlice";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsSlice";
export default function List() {
  const contacts = useSelector(contactsSelectors.selectAll);
  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(deleteContact(id));
  }
  return (
    <ul className="list-group mt-3">
      {contacts.map((contact) => (
        <li
          key={contact.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>
            <span className="me-2">
              <strong>Name: </strong>
              {contact.name}
            </span>
            <span>
              <strong>Number: </strong>
              {contact.number}
            </span>
          </span>
          <span>
            <button className="btn btn-warning me-2">
              <i className="bi bi-pencil"></i>
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(contact.id)}
            >
              <i className="bi bi-x"></i>
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
}
