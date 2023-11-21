import SetDataOnLocalSorage from "../SetDataOnLocalStorage/SetDataOnLocalSorage";

export default function ValidationFormInputs(FormType) {
  let textValidation = document.getElementById("InputsVal");
  let closeModal = document.getElementById("CloseModal");
  let resultData;

  if (FormType === "Document") {
    let inputFile = document.getElementById("file");

    if (inputFile.value) {
      // Clear validation text and close modal
      textValidation.innerHTML = "";
      closeModal.click();

      // Prepare result data
      resultData = {
        name: inputFile.files[0].name.split(".")[0],
        path: window.location.href,
      };

      // Reset input file value
      inputFile.value = "";

      // Call function to set data on local storage
      SetDataOnLocalSorage(resultData);
    } else {
      textValidation.innerHTML = "You Don't Upload Any Files";
    }
  } else {
    let EventTitle = document.getElementById("EventTitle");
    let EventType = document.getElementById("EventType");
    let SourcingStrategy = document.getElementById("SourcingStrategy");
    let Description = document.getElementById("Description");

    if (
      EventTitle.value &&
      EventType.value &&
      EventType.value !== "Please Select Event Type" &&
      SourcingStrategy.value !== "Please Select Sourcing Strategy" &&
      SourcingStrategy.value &&
      Description.innerText
    ) {
      closeModal.click();

      // Prepare result data
      resultData = {
        name: EventTitle.value,
        path: window.location.href,
      };

      // Clear validation text and input fields
      textValidation.innerHTML = "";
      EventTitle.value = "";
      EventType.value = "";
      SourcingStrategy.value = "";
      Description.innerText = "";

      // Call function to set data on local storage
      SetDataOnLocalSorage(resultData);
    } else {
      textValidation.innerHTML = "There is The Inputs Field Not Valid";
    }
  }
}
