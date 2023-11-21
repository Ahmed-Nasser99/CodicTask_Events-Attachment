import React, { useState } from "react";
import DocumentForm from "../../Forms/DocumentForm/DocumentForm";
import EventForm from "../../Forms/EventForm/EventForm";
import ValidationFormInputs from "../../Forms/InputsValidation/InputsValidation";

export default function ModalFormCreate({
  resizeDatatable,
  setresizeDatatable,
}) {
  // State to determine the type of form to display
  let [FormType, setFormType] = useState("Document");

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header border-0">
            {/* Modal title */}
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Create Attachment
            </h1>
            {/* Close button */}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                // Reset the form type to "Document" on close
                setFormType("Document");
              }}
            ></button>
          </div>
          <div className="modal-body">
            <div className="dropdown">
              {/* Attachment type label */}
              <h6 data-bs-toggle="collapse" data-bs-target="#document-collapse">
                Attachment Type <span className="text-danger">*</span>
              </h6>
              {/* Attachment type selection button */}
              <button
                className="btn btn-toggle align-items-center rounded collapsed flex-row-reverse justify-content-between w-100 bg-white border p-3"
                data-bs-toggle="collapse"
                data-bs-target="#document-collapse"
                aria-expanded="true"
              >
                <span className="fs-5">{FormType}</span>
              </button>
              <div className="collapse my-2" id="document-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small w-100 bg-white shadow rounded">
                  {/* Document form selection button */}
                  <button
                    data-bs-toggle="collapse"
                    data-bs-target="#document-collapse"
                    className="fs-5 p-2 px-3 w-100 btn border-bottom text-start"
                    onClick={() => {
                      // Set the form type to "Document"
                      setFormType("Document");
                    }}
                  >
                    Document
                  </button>
                  {/* Event form selection button */}
                  <button
                    data-bs-toggle="collapse"
                    data-bs-target="#document-collapse"
                    className="fs-5 p-2 px-3 w-100 btn text-start"
                    onClick={() => {
                      // Set the form type to "Event"
                      setFormType("Event");
                    }}
                  >
                    Event
                  </button>
                </ul>
              </div>
            </div>
            {/* Render the appropriate form based on the form type */}
            {FormType === "Document" ? <DocumentForm /> : <EventForm />}
            {/* Validation error message */}
            <p className="text-danger text-center" id="InputsVal"></p>
          </div>
          <div className="modal-footer flex-nowrap border-0 justify-content-between">
            {/* Close button */}
            <button
              onClick={() => {
                // Reset the form type to "Document" on close
                setFormType("Document");
              }}
              type="button"
              className="btn btn-secondary w-25 px-5 py-2 b-gray"
              data-bs-dismiss="modal"
              id="CloseModal"
            >
              Close
            </button>
            {/* Confirm button */}
            <button
              onClick={() => {
                // Increment the resizeDatatable state and perform form validation
                setresizeDatatable(++resizeDatatable);
                ValidationFormInputs(FormType);
              }}
              type="button"
              className="btn btn-primary w-25"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
