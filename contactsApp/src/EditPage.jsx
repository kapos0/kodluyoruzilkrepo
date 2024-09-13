import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { contactsSelectors, editContact } from "./redux/contactsSlice";
export default function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contact = useSelector((state) =>
    contactsSelectors.selectById(state, id)
  );
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      editContact({
        id: contact.id,
        changes: { name, number },
      })
    );
    navigate("/");
  }

  return (
    <div className="container my-5">
      <h1 className="display-1 text-center">Edit Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nameEl" className="form-label">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="nameEl"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="numberEl" className="form-label">
            Number
          </label>
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="form-control"
            id="numberEl"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}
