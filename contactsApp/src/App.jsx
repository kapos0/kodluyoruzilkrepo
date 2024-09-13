import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Form from "./components/Form";
import List from "./components/List";
import { useSelector } from "react-redux";
import { contactsSelectors } from "./redux/contactsSlice";
function App() {
  const totalContacts = useSelector(contactsSelectors.selectTotal);
  return (
    <div className="container my-5">
      <h1 className="display-1 text-center">Contacts: ({totalContacts})</h1>
      <Form />
      <List />
    </div>
  );
}
export default App;
