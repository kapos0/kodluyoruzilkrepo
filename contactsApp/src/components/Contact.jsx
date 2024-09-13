import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteContact } from "../redux/contactsSlice";
export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
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
        <button
          className="btn btn-warning me-2"
          onClick={() => navigate(`edit/${contact.id}`)}
        >
          <i className="bi bi-pencil"></i>
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(deleteContact(contact.id))}
        >
          <i className="bi bi-x"></i>
        </button>
      </span>
    </li>
  );
}
Contact.propTypes = {
  contact: PropTypes.object,
};
