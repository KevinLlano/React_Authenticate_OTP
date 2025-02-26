// Importing necessary components from Flowbite and React
import { Label, TextInput } from 'flowbite-react';
import React from 'react';

// Defining the CustomInput functional component
const CustomInput = ({ label, placeholder, name, ...rest }) => {
  return (
    <>
      {/* Container for the label */}
      <div className="mb-2 block">
        {/* Render the label for the input field, using the 'label' prop for accessibility */}
        <Label htmlFor={label} value={label} />
      </div>
      {/* Render the text input field with the given properties */}
      <TextInput
        id={label} 
        name={name} 
        type="text" 
        placeholder={placeholder} 
        required 
        {...rest} 
      />
    </>
  );
};


export default CustomInput;
