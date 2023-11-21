import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function EventForm() {
  const [editorContent, setEditorContent] = useState("");

  return (
    <div className="d-flex align-items-start flex-column gap-3 my-3">
      {/* Event Title */}
      <div className="w-100">
        <label className="fs-5 my-1" htmlFor="EventTitle">
          Event Title <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          id="EventTitle"
          className="form-control p-3"
          placeholder="Document"
        />
      </div>

      {/* Event Type */}
      <div className="w-100">
        <label className="fs-5 my-1" htmlFor="EventType">
          Event Type<span className="text-danger">*</span>
        </label>
        <select
          className="form-select p-3"
          id="EventType"
          aria-label="Default select example"
          placeholder="Please Select Event Type"
        >
          <option disabled selected>
            Please Select Event Type
          </option>
          <option value="Sports">Sports</option>
          <option value="Party">Party</option>
          <option value="Education">Education</option>
        </select>
      </div>

      {/* Sourcing Strategy */}
      <div className="w-100">
        <label className="fs-5 my-1" htmlFor="SourcingStrategy">
          Sourcing Strategy<span className="text-danger">*</span>
        </label>
        <select
          className="form-select p-3"
          id="SourcingStrategy"
          aria-label="Default select example"
          placeholder="Please Select Sourcing Strategy"
        >
          <option disabled selected>
            Please Select Sourcing Strategy
          </option>
          <option value="Global sourcing">Global sourcing</option>
          <option value="Captive service operations">
            Captive service operations
          </option>
        </select>
      </div>

      {/* Description */}
      <div className="w-100">
        <label className="fs-5 my-1" htmlFor="Description">
          Description
        </label>
        <ReactQuill
          value={editorContent}
          placeholder="Please Enter Request Description"
          id="Description"
        />
      </div>
    </div>
  );
}
