import React from "react";

export default function DisplayEventsAndAttachments() {
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
              <button className="btn btn-outline-info">Create</button>
              <button className="btn btn-outline-info">Mange</button>
            </div>
            <table className="table my-3">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Attachment</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody id="tableBody">
                <tr key={23}>
                  <th scope="row">Avms</th>
                  <td>Dowload</td>
                  <td>E</td>
                  <td>D</td>
                </tr>
                <tr key={24}>
                  <th scope="row">Avms</th>
                  <td>Dowload</td>
                  <td>E</td>
                  <td>D</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
