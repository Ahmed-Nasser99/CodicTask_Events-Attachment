export default function SetDataOnLocalSorage(data) {
  // Check if "dataDoc" key does not exist in local storage
  if (!localStorage.getItem("dataDoc")) {
    // Create a new array with the data and store it in local storage
    localStorage.setItem("dataDoc", JSON.stringify([data]));
    return;
  }

  // Retrieve the existing array from local storage and parse it
  let ArrData = JSON.parse(localStorage.getItem("dataDoc"));

  // Add the new data to the existing array
  ArrData.push(data);

  // Store the updated array back in local storage
  localStorage.setItem("dataDoc", JSON.stringify(ArrData));
}
