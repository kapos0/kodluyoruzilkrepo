import { useSelector, useDispatch } from "react-redux";
import { contactsSelectors, deleteAllContacts } from "../redux/contactsSlice";
import Contact from "./Contact";
export default function List() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.selectAll);
  const total = useSelector(contactsSelectors.selectTotal);
  return (
    <>
      <ul className="list-group mt-3">
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
      {total > 1 ? (
        <button
          type="button"
          className="btn btn-danger mt-3"
          onClick={() => dispatch(deleteAllContacts())}
        >
          Delete All
        </button>
      ) : (
        ""
      )}
    </>
  );
}
