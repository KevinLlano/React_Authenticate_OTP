import { Button } from "flowbite-react";
import React from "react";
import { SiFusionauth } from "react-icons/si"; // Importing a specific icon from the react-icons library

function VerifyOTP() {
  return (
    <>
      {/* // Container for the header section */}
      <div className="flex flex-col items-center gap-4">
        {/* // Icon representing the login system (e.g., FusionAuth) */}
        <SiFusionauth className="text-5xl" />
        <h1 className="text-2xl font-bold mb-10">Verify Email By OTP</h1>
      </div>
      {/* // Form container for OTP input, allowing users to enter a 6-digit code one digit at a time */}
      <form className="max-w-sm mx-auto">
        <div className="flex justify-center mb-2 space-x-2 rtl:space-x-reverse">
          {[...Array(6)].map(
            (
              _,
              index // Creating an array of 6 elements for the OTP input fields
            ) => (
              <div key={index + 1}>
                <label htmlFor={`code-${index + 1}`} className="sr-only">
                  Code {index + 1}
                </label>
                <input // Input field for entering a single digit of the OTP
                  type="text" // Text input type
                  maxLength="1" // Limits input to a single character
                  data-focus-input-init // Custom attribute for handling focus
                  data-focus-input-next="code-2" // Custom attribute for navigation to the next input
                  id={`code-${index + 1}`} // Unique ID for each input
                  className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
            )
          )}{" "}
        </div>
        <div className="block mt-6 mb-4">
          {" "}
          {/* // Container for the submit button */}
          <Button type="submit" className="w-48 mx-auto">
            {" Submit "}
          </Button>
        </div>
        <p // Helper text explaining the input requirement
          id="helper-text-explanation"
          className="mt-2 text-sm text-gray-500 dark:text-gray-400"
        >
          Please insert the 6 digit code we sent via email.
        </p>
      </form>
    </>
  );
}

export default VerifyOTP;
