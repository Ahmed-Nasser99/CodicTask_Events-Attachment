import React, { useEffect, useState } from "react";
import ModalFormCreate from "../ModalFormCreate/ModalFormCreate";

export default function DisplayEventsAndAttachments() {
  // State to hold the data documents
  const [DataDocuments, setDataDocuments] = useState([]);
  const [resizeDatatable, setresizeDatatable] = useState(0);

  useEffect(() => {
    // Retrieve data documents from local storage when component mounts or when resizeDatatable state changes
    if (JSON.parse(localStorage.getItem("dataDoc"))) {
      setDataDocuments(JSON.parse(localStorage.getItem("dataDoc")));
    } else {
      setDataDocuments([]);
    }
  }, [resizeDatatable]);

  return (
    <div className="accordion" id="accordionPanelsStayOpenExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button bg-white fw-semibold shadow-0 border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            Event & Attachment
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          className="accordion-collapse collapse show"
        >
          <div className="accordion-body p-0">
            <div className="d-flex justify-content-end gap-3 px-2">
              <button
                className="btn btn-outline-info"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Create
              </button>
              <ModalFormCreate
                resizeDatatable={resizeDatatable}
                setresizeDatatable={setresizeDatatable}
              />
              <button className="btn btn-outline-info">Mange</button>
            </div>
            <table className="table my-3 border">
              <thead>
                <tr className="table-secondary">
                  <th>Name</th>
                  <th>Attachment</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody id="tableBody">
                {DataDocuments.length === 0 ? (
                  <h4 className="text-center text-danger my-3">
                    There's No Data
                  </h4>
                ) : (
                  // Render data documents in table rows
                  DataDocuments.map((el, i) => (
                    <tr key={i}>
                      <td>{el.name}</td>
                      <td>
                        <a href={el.path} download={el.name}>
                          <i className="fa-solid fa-download text-info fs-5"></i>
                        </a>
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
