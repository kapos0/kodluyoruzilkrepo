import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function App() {
  function getFromLocal(): string {
    const savedData = localStorage.getItem("markdowninput");
    if (savedData) return JSON.parse(savedData);
    return "";
  }
  const [markdown, setMarkdown] = useState<string>(getFromLocal);

  return (
    <main className="container my-4">
      <h1 className="display-1 text-center">MarkDown Previewer</h1>
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-primary">Markdown Input</h3>
          <textarea
            className="form-control"
            style={{ resize: "none", height: "500px", overflowY: "auto" }}
            value={markdown}
            onChange={(e) =>
              setMarkdown((): string => {
                localStorage.setItem(
                  "markdowninput",
                  JSON.stringify(e.target.value)
                );
                return e.target.value;
              })
            }
          />
        </div>
        <div className="col-md-6">
          <h3 className="text-primary">Preview</h3>
          <div
            className="p-3 border rounded"
            style={{ height: "500px", overflowY: "auto" }}
          >
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </main>
  );
}
