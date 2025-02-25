import { Button } from 'flowbite-react';
import React from 'react';
import { CustomInput } from '../../components';
import { PiCashRegisterThin } from 'react-icons/pi';


function ResetPasswordPage() {
    return (
      <>
        {/* Header section for the reset password form */}
        <div className="flex flex-col items-center gap-4">
          {/* Icon representing the password reset (PiCashRegisterThin) */}
          <PiCashRegisterThin className="text-5xl" />
          {/* Title of the reset password page */}
          <h1 className="text-2xl font-bold mb-10">Reset Password</h1>
        </div>
        {/* Form container for user input */}
        <form className="flex max-w-md flex-col gap-4">
          <div>
            <CustomInput
              label={'Your Password'} 
              type="password"
              name="password"
              placeholder="password"
            />
          </div>
          {/* Input for confirming new password */}
          <div>
            <CustomInput
              label={'Repeat Password'} 
              type="password" 
              name="confirmPassword"
              placeholder="password"
            />
          </div>
  
          {/* Submit button for the form */}
          <Button type="submit">Submit</Button>
        </form>
      </>
    );
  }
  

  export default ResetPasswordPage;
  