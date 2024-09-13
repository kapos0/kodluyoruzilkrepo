import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState<number>(0);
  const [htmlCheck, setHtmlChecked] = useState<boolean>(false);
  const [data, setData] = useState<string | undefined>(undefined);

  async function getText() {
    try {
      const res = await fetch(
        `https://baconipsum.com/api/?type=meat-and-filler&paras=${inputValue}&start-with-lorem=1&format=${
          htmlCheck ? "html" : "json"
        }`
      );
      if (htmlCheck) {
        const textData: string = await res.text();
        setData(textData);
      } else {
        const jsonData: string = await res.json();
        setData(jsonData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <main className="container-fluid text-bg-dark" style={{ height: "100vh" }}>
      <h1 className="text-center display-1">Sample Text Generator</h1>
      <label htmlFor="parafLength" className="form-label">
        how many paragraphs (range: 1-21)
      </label>
      <input
        type="range"
        id="parafLength"
        className="form-range"
        min="1"
        max="21"
        step="1"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      <div className="d-flex justify-content-between align-items-center my-2">
        <span>
          <input
            type="checkbox"
            id="htmlcheckbox"
            className="form-check-input"
            checked={htmlCheck}
            onChange={(e) => setHtmlChecked(e.target.checked)}
          />
          <label htmlFor="htmlcheckbox" className="form-label ms-1">
            Include HTML
          </label>
        </span>
        <button
          type="button"
          onClick={getText}
          className="btn btn-primary ms-2"
        >
          GET
        </button>
      </div>
      <div className="card">
        <div className="card-header">Text</div>
        <div className="card-body text-bg-dark">{data}</div>
      </div>
    </main>
  );
}
