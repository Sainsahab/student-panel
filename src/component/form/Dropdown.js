import React from "react";
import Multiselect from "multiselect-react-dropdown";

const Dropdown = () => {
  return (
    <>
      <div>Dropdown</div>
      <Multiselect
        options={""} // Options to display in the dropdown
        selectedValues={""} // Preselected value to persist in dropdown
        onSelect={this.onSelect} // Function will trigger on select event
        onRemove={this.onRemove} // Function will trigger on remove event
        displayValue="name" // Property name to display in the dropdown options
      />
    </>
  );
};

export default Dropdown;
