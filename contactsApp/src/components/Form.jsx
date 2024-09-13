import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addContact, addContacts } from "../redux/contactsSlice";
export default function Form() {
  const dispatch = useDispatch();
  const [names, setNames] = useState("");
  const [numbers, setNumbers] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!(names || numbers)) return;
    const nameItems = names.split(",");
    const numberItems = numbers.split(",");
    if (nameItems.length !== numberItems.length) {
      alert("names and numbers have to be same length");
      return;
    }
    if (nameItems.length > 1 || numberItems.length > 1) {
      const data = nameItems.map((name, index) => ({
        id: nanoid(),
        name: name.trim(),
        number: numberItems[index].trim(),
      }));

      dispatch(addContacts(data));
    } else {
      dispatch(
        addContact({
          id: nanoid(),
          name: names.trim(),
          number: numbers.trim(),
        })
      );
    }
    setNames("");
    setNumbers("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nameEl" className="form-label">
          Name
        </label>
        <input
          type="text"
          value={names}
          onChange={(e) => setNames(e.target.value)}
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
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
          className="form-control"
          id="numberEl"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        ADD
      </button>
    </form>
  );
}
